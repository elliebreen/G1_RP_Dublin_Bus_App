# Generated by Django 3.2.4 on 2021-07-10 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrapper', '0002_auto_20210707_1205'),
    ]

    operations = [
        migrations.AlterField(
            model_name='allstopswithroute',
            name='route_number',
            field=models.CharField(max_length=45, null=True),
        ),
        migrations.AlterField(
            model_name='routes',
            name='route_description',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
