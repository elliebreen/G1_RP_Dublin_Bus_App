# Generated by Django 3.2.4 on 2021-07-10 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrapper', '0006_alter_forecastweather_dt_iso'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forecastweather',
            name='dt_iso',
            field=models.CharField(max_length=45, null=True),
        ),
    ]
