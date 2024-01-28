---
title: "keep your JSON in the mudroom"
date: 2024-01-28
author: "socraticDev"
image: ../../images/json.png
tags:
  - programming
  - devops
---

`JSON` is an acronym meaning "JavaScript Object Notation". It's a
native complex data structure in the JavaScrip programming language. It usually
represents an Object; similar to a C `Structure` or a Pascal `Record`. 

In a nutshell, a programmer-friendly way to structure information in the form
of a `string`. Surely by virtue of its simplicity, `JSON` has become the format
most used to represent information in a transfer between two
systems.

Programmers and devops people: Don't assume anything when it comes to JSON.
Especially if you aren't in a JavaScript ecosystem. It's not because you have a chain of
characters that look like JSON that your favorite programming language will be able to
treat it without preliminary treatment.

In JavaScript, you're in luck: the language natively supports it:

```javascript
let a = {"foo": "bar"};

console.log(a.foo);

// bar
```

But don't expect JSON to work natively in Python:

```python

a = {"foo": "bar"}

print(a.foo)

# Traceback (most recent call last):
#  File "<stdin>", line 1, in <module>
# AttributeError: 'dict' object has no attribute 'foo'

```

(I'm hearing pythonista interjecting and talking about Dict, but please
hold your peace. We just want to make the point that more often than not JSON strings needs to
be serialized, deserialized, and requires some guesswork depending on the context)

#### each programming language have built-in functions to serialize, deserialize, load, dump, parse JSON: read the docs and use them

Python does not know JSON natively, we must import the `json` library
to be able to manipulate it in code

```python
import json

json_string = '{"foo": "bar"}'

json_object = json.loads(json_string)

print(json_object["foo"])

# bar
```

This json module allows you to deserialize the character string "{'foo': 'bar'}" into a programmatic object. Once deserialized, the programmer will be able to perform different operations on the object. Operations that would be much more difficult to perform directly from a character string!

### just be aware that a JSON object and a JSON string are two different things

Most programming languages ​​have specialized functions to
serialize and deserialize the `JSON`. If this is your first time implementing a
JSON-based feature in a new system, it's
normal for you to struggle a little. Just make sure you have to read the
language documentation and make it work by trial and error.

`JSON` is a way of representing information. It appears most under
the form of a character string which must be deserialized into an object
to be understood by code.

But, in your daily work, you will realize that certain programs
request to receive `JSON` in the form of a _string_, while others
require you to have it deserialized. Don't assume anything and keep your eyes open
to adapt.

For example, this [Terraform resource](https://registry.terraform.io/providers/mongodb/mongodbatlas/latest/docs/resources/auditing)(programming language used to
provision and configure cloud resources) requests to receive a
`JSON` in the form of a _string_. We see that the programmer uses the
`jsonencode` utility function to serialize a well-formatted JSON object into a
JSON string. It is a fine way to make the code easier to read and leaves it to the compiler to
transform into a string when executing the code.

```terraform
resource "mongodbatlas_auditing" "this" {
  enabled    = true
  project_id = module.atlas_project.id
  audit_authorization_success = true

  audit_filter = jsonencode({
    "$and" : [
      {
        "roles" : {
          "$elemMatch" : {
            "role" : "readWriteAll",
            "db" : "panamaPapers"
          }
        }
      },
      {
        "$or" : [
          {
            "atype" : "authCheck",
            "param.command" : {
              "$in" : [
                "aggregate",
                "mapReduce",
                "delete",
                "eval",
                "findAndModify",
                "insert",
                "update",
                "resetError"
              ]
            }
          },
          {
            "atype" : {
              "$in" : [
                "createCollection",
                "createDatabase",
                "createIndex",
                "renameCollection",
                "dropCollection",
                "dropDatabase",
                "dropIndex",
                "createUser",
                "dropUser",
                "dropAllUsersFromDatabase",
                "updateUser",
                "grantRolesToUser"
              ]
            }
          }
        ]
      }
    ]
  })
}
```

### this is a API-first world (bonus)

Take for granted any system you work on is either an API or consumes APIs. `JSON`
being the standard payload format, you better make friend with `JSON` and become
fluent in manipulating it.

My suggestion is to never let JSON enter your system's logic. If you want to
stay sane, you will deserialize received JSON payloads into your own types and
you will serialize your objects into JSON responses just before returning them.

`Golang` makes it easy and straightforward to do just that by letting you
annote each field of a class with json key mapping. You'd be a fool not to use
it.

Here is class representing a social media (X, Mastodon) card:

```go
Card       struct {
		AuthorName       string `json:"author_name"`
		AuthorURL        string `json:"author_url"`
		Blurhash         string `json:"blurhash"`
		Description      string `json:"description"`
		EmbedURL         string `json:"embed_url"`
		Height           int    `json:"height"`
		Html             string `json:"html"`
		Image            string `json:"image"`
		ImageDescription string `json:"image_description"`
		Language         string `json:"language"`
		ProviderName     string `json:"provider_name"`
		ProviderURL      string `json:"provider_url"`
		PublishedAt      any    `json:"published_at"`
		Title            string `json:"title"`
		Type             string `json:"type"`
		URL              string `json:"url"`
		Width            int    `json:"width"`
	}
```