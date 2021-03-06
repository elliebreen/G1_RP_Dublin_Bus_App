# Generated by Django 3.2.4 on 2021-07-16 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrapper', '0008_allstopswithroute_direction'),
    ]

    operations = [
        migrations.AddField(
            model_name='forecastweather',
            name='feels_like',
            field=models.CharField(max_length=45, null=True),
        ),
        migrations.AddField(
            model_name='forecastweather',
            name='month',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='forecastweather',
            name='rain_1h',
            field=models.CharField(default='0', max_length=45, null=True),
        ),
        migrations.AddField(
            model_name='forecastweather',
            name='weekday',
            field=models.CharField(max_length=10, null=True),
        ),
    ]
