# Generated by Django 3.2.4 on 2021-08-12 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrapper', '0020_auto_20210727_0853'),
    ]

    operations = [
        migrations.AddField(
            model_name='currentweather',
            name='rain',
            field=models.CharField(default='0', max_length=45, null=True),
        ),
        migrations.AddField(
            model_name='currentweather',
            name='weather_id',
            field=models.CharField(max_length=45, null=True),
        ),
    ]