from django.db import models

class Card(models.Model):
    name = models.CharField(max_length=120)
    meaning = models.CharField(max_length=200)
    reversal = models.CharField(max_length=200)
    card_id = models.IntegerField()
    image = models.ImageField(upload_to='images')

    def __str__(self):
        return "%s \n %s \n %s \n %s \n %s \n" %(self.name, self.meaning, self.reversal, self.card_id, self.image)
