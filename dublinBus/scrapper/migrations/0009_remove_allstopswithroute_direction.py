# Generated by Django 3.2.4 on 2021-07-15 09:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scrapper', '0008_allstopswithroute_direction'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='allstopswithroute',
            name='direction',
        ),
    ]