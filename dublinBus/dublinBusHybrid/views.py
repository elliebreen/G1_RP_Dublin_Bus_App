from django.shortcuts import render
from django.template import loader, Context, Template
from django.views.generic import View
from django.forms.models import model_to_dict

from django.http import HttpResponse, HttpResponseRedirect, Http404

from .forms import JourneyPlannerForm

from scrapper.models import Stops, Routes, AllStopsWithRoute, ForecastWeather, CurrentWeather

import datetime

class Index(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')

class JourneyPlanner(View):
    # def get(self, request, *args, **kwargs):
    #     return render(request, 'journey-planner.html')

    def get(self, request):
        return render(request, 'journeyPlanner.html', {'form': JourneyPlannerForm()})

    def post(self, request, *args, **kwargs):
        form = JourneyPlannerForm(request.POST)

        if form.is_valid():
            context = self.info(form)
            print('Context', context)
            return render(request, 'journeyPlanner/showRoute.html', context= context)
        else:
            return render(request, 'journeyPlanner.html', { 'form': form })

    def info(self, form):
        # Generate counts of some of the main objects
        num_stops = Stops.objects.all().count()
        num_routes = Routes.objects.all().count()
        fd = form.cleaned_data
        start = fd.get('origin_location')
        destination = fd.get('destination_location')
        # start = fd.get('start_point')
        # destination = fd.get('destination_point')
        travel_date = fd.get('travel_date')
        travel_time = fd.get('travel_time')

        user_forecast_datetime = self.forecastDatetime(form)

        userDates = 1
        user_unix_time = self.toUnix(form)

        current_weather = CurrentWeather.objects.all().last()
        print('CURRENT WEATHER', current_weather)
        
        forecast_weather = ForecastWeather.objects.get(dt_iso=user_forecast_datetime)

        context = {
            'num_stops': num_stops,
            'num_routes': num_routes,
            'start': start,
            'destination': destination,
            'travel_date': travel_date,
            'travel_time': travel_time,
            'form': form,
            'user_forecast_datetime': user_forecast_datetime,
            'current_weather' : model_to_dict(current_weather),
            'forecast_weather' : model_to_dict(forecast_weather),
            'userUnix': user_unix_time
        }
        return context

    def forecastDatetime(self, form):
        fd = form.cleaned_data
        travel_date = fd.get('travel_date')
        travel_time = fd.get('travel_time')

        forecast_6am = datetime.time(6,0,0)
        forecast_9am = datetime.time(9,0,0)
        forecast_12pm = datetime.time(12,0,0)
        forecast_15pm = datetime.time(15,0,0)
        forecast_18pm = datetime.time(18,0,0)
        forecast_21pm = datetime.time(21,0,0)
        forecast_00am = datetime.time(0,0,0)

        if travel_time > datetime.time(4,30) and travel_time <= datetime.time(7,30):
            user_forecast_datetime = datetime.datetime.combine( travel_date, forecast_6am)
        elif travel_time > datetime.time(7,30) and travel_time <= datetime.time(10,30):
            user_forecast_datetime = datetime.datetime.combine( travel_date, forecast_9am)
        elif travel_time > datetime.time(10,30) and travel_time <= datetime.time(13,30):
            user_forecast_datetime = datetime.datetime.combine( travel_date, forecast_12pm)
        elif travel_time > datetime.time(13,30) and travel_time <= datetime.time(16,30):
            user_forecast_datetime = datetime.datetime.combine( travel_date, forecast_15pm)
        elif travel_time > datetime.time(16,30) and travel_time <= datetime.time(19,30):
            user_forecast_datetime = datetime.datetime.combine( travel_date, forecast_18pm)
        elif travel_time > datetime.time(19,30) and travel_time <= datetime.time(22,30):
            user_forecast_datetime = datetime.datetime.combine( travel_date, forecast_21pm)
        elif travel_time > datetime.time(22,30) and travel_time <= datetime.time(0,0):
            travel_date += datetime.timedelta(days=1)
            user_forecast_datetime = datetime.datetime.combine( travel_date, forecast_00am)
        else:
            user_forecast_datetime = 'error'

        return user_forecast_datetime

    def toUnix(self, form):
        fd = form.cleaned_data
        travel_date = fd.get('travel_date')
        travel_time = fd.get('travel_time')

        user_datetime = datetime.datetime.combine(travel_date, travel_time)

        user_unix_time = datetime.datetime.timestamp(user_datetime)

        return user_unix_time

class BusRoutes(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'routes.html')

class CovidInfo(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'covidInfo.html')

class LeapCard(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'leapCard.html')
