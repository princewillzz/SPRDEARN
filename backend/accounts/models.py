from django.db import models


user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

'''
class Person(models.Model):
    name = models.CharField(max_length=100)
    username = models.BigIntegerField(
        primary_key=True, blank=False, unique=True, max_length=20)
    age = models.IntegerField()
    joined_date = models.DateTimeField(auto_now=True)
    password = models.CharField(blank=False, max_length=100)

    def __str__(self):
        message = f"Hii, {name} you joined on {joined_date}"
        return message
'''
