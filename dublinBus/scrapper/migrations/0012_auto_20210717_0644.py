# Generated by Django 3.2.4 on 2021-07-17 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrapper', '0011_covid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='covid',
            name='closeContact',
        ),
        migrations.RemoveField(
            model_name='covid',
            name='communityTransmission',
        ),
        migrations.RemoveField(
            model_name='covid',
            name='travelAbroad',
        ),
        migrations.AlterField(
            model_name='covid',
            name='confirmedCases',
            field=models.CharField(default='0', max_length=45),
        ),
        migrations.AlterField(
            model_name='covid',
            name='confirmedDeaths',
            field=models.CharField(default='0', max_length=45),
        ),
        migrations.AlterField(
            model_name='covid',
            name='fid',
            field=models.CharField(default='0', max_length=45),
        ),
        migrations.AlterField(
            model_name='covid',
            name='hospitalisedCases',
            field=models.CharField(default='0', max_length=45),
        ),
        migrations.AlterField(
            model_name='covid',
            name='icu',
            field=models.CharField(default='0', max_length=45),
        ),
        migrations.AlterField(
            model_name='covid',
            name='statisticsProfileDt',
            field=models.CharField(default='0', max_length=45),
        ),
        migrations.AlterField(
            model_name='covid',
            name='totalConfirmedCases',
            field=models.CharField(default='0', max_length=45),
        ),
        migrations.AlterField(
            model_name='covid',
            name='totalDeaths',
            field=models.CharField(default='0', max_length=45),
        ),
    ]
