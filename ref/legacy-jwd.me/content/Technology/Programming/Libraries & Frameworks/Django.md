# Django
The de facto full stack [[Python]]  web framework. In addition to libraries Django comes with [[CLI]] tools to manage your projects. The getting started docs for Django can be found here:

https://www.djangoproject.com/start/

## Django Project Organization
*Django projects* are generally structured in the following way. The *Django project* itself is the outermost layer. The *Django project* the contains the basic settings necessary to run your project and connect the *Django apps* that it contains. Inside a *Django project* there can be one or many *Django apps*. Each *Django app* may contain it's own set of models, templates, URLs, and more. When *Django apps* are designed properly so that they live within themselves they can be more easily shared between projects. In this way the Django ecosystem allows for plugins to be distributed as *Django apps* to include in your larger *Django project* similar to the way [[WordPress]] plugins and templates work. *Django apps* and *Django projects* are both created from the Django [[CLI]] tools as documented below.  
## Common Django CLI commands

```bash
# install django
pip install django

# Check your Django version: 

$ python -m django --version

# Create a new project: 

django-admin startproject mysite

# Run your project:

python manage.py runserver

# Run the Django API explorer in the python REPL

python manage.py shell

# Create an app inside your project

python manage.py startapp myappname

# Run database migrations

python manage.py migrate

# Make migrations for your app

python manage.py makemigrations myappname

# Check migrations for problems before applying them
 
python manage.py check

# Apply your migrations

python manage.py migrate

# Create your admin user 

python manage.py createsuperuser
```
## Commonly modified in settings.py

```python

INSTALLED_APPS = [
    "myapp.apps.MyConfig",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

# ~ ~ ~ ~ 

TIME_ZONE = "America/New_York"
```

## Django Databases & ORM
Django uses an Object Relational Mapper (ORM) and a standardized models.py file associated with each app to CREATE the necessary tables for the app automatically. A deep understanding of the models class is necessary to use this effectively but allows your database to be relatively agnostic between SQLite, [[Postgres]], etc.

The docs for the ORM in 5.0 can be found here:

[https://docs.djangoproject.com/en/5.0/topics/db/models/](https://docs.djangoproject.com/en/5.0/topics/db/models/)
### Django Field Name Restrictions
Naming your fields in Django requires you to follow two rules.
1. You **may not** name a field a python reserved word. You can see the list of reserved python words by running `help("keywords")` in the [[Python]] [[REPL]]. As of Python 3.12.3 the reserved words are:  `and, as, assert, async, await, break, class, continue, def, del, elif, else, except, False, finally, for, from, global, if, import, in, is, lambda, None, nonlocal, not, or, pass, raise, return, True, try, while, with, yield`
2. Your field name **may not** contain double underscores anywhere in it's name. 
### Updating your models in 3-5 steps
Remember the 3-4 steps for making and adjusting models...
1. Change your models (in `models.py`).
2. Run python `manage.py makemigrations` to create migrations for those changes
3. Optionally run `python manage.py check` to check for problems. 
4. Run `python manage.py migrate` to apply those changes to the database.
5. Update the admin interface model in `admin.py` if necessary
### Django Database Relationships
The most important relationship to understand how to specify are many-to-one, many-to-many and one-to-one.

https://docs.djangoproject.com/en/5.0/topics/db/models/#relationships

many-to-one use `models.ForeignKey`
many-to-many use  `models.ManyToManyField`
one-to-one use `models.OneToOneField`
## Building models from an existing database
If you have an existing database design you have built out and wish to integrate with Django there is a Django utility called inspectdb that will generate the models from an existing database.
### Querying Django Collections with the ORM
Django offers object methods like filter, get, and all. These methods take keyword arguments like filter(id=4). Django offers a shortcut to use the primary key via pk so in a table where id was the primary filter(pk=4) would be the equivalent. This could he handy I suppose, though I generally prefer verbosity over shortcuts, especially in a case where the primary key is already a 2 character id.

Here are some sample queries for the Django shell [[REPL]]. 

```python
from polls.models import Choice, Question
from django.utils import timezone

Question.objects.all()

q = Question(question_text="What's new?", pub_date=timezone.now())

q.save()

q.id

q.question_text

q.pub_date

q.question_text = "What's up?"

q.save()

Question.objects.all()

Question.objects.filter(id=1)

q = Question.objects.get(pk=1)

current_year = timezone.now().year
Question.objects.get(pub_date__year=current_year)

Question.objects.get(id=2) # this should throw an error

Question.objects.filter(question_text__startswith="What")

q.choice_set.all()

q.choice_set.create(choice_text="Not much", votes=0)
q.choice_set.create(choice_text="The sky", votes=0)
c = q.choice_set.create(choice_text="Just hacking again", votes=0)
c.question()

  
# The API automatically follows relationships as far as you need.
# Use double underscores to separate relationships.
# This works as many levels deep as you want; there's no limit.
# Find all Choices for any question whose pub_date is in this year
# (reusing the 'current_year' variable we created above).
Choice.objects.filter(question__pub_date__year=current_year)


# Let's delete one of the choices. Use delete() for that.
c = q.choice_set.filter(choice_text__startswith="Just hacking")
c.delete()

```
### Sample models.py

```python
import datetime

from django.db import models
from django.utils import timezone

# Create your models here.


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
   
```


## Django Shortcuts
Django has several shortcuts for doing commonly repeated tasks like rendering a template or generating a 404 when a matching object isn't found. 
### render
The following functions are equivalent...
```python
  
def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    template = loader.get_template("polls/index.html")
    context = {
        "latest_question_list": latest_question_list,
    }
    return HttpResponse(template.render(context, request))
    
def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    context = {"latest_question_list": latest_question_list}
    return render(request, "polls/index.html", context)
```

### get_object_or_404
The following functions are equivalent...
```python
def detail(request, question_id):
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, "polls/detail.html", {"question": question})


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, "polls/detail.html", {"question": question})
```

## Django Namespaces & Templates
### Namespacing your URLs
To namespace your URLs add an `app_name` line before your `url_patterns = [` line in `urls.py`
```python
app_name = "polls"
url_patterns = [
...
```
### Proper linking
Use the `url` method to have django traverse your URLconf to properly link to another view.  This allows you to modify the path of a view without needing to update any links manually.

```
Bad

<li><a href="/polls/{{ question.id }}/">{{ question.question_text }}</a></li>

Better

<li><a href="{% url 'detail' question.id %}">{{ question.question_text }}</a></li>

Best

<li><a href="{% url 'polls:detail' question.id %}">{{ question.question_text }}</a></li>

```
