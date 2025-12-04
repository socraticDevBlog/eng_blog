---
title: "In 2024, We Should Stop Sharing Text Through Screenshots!"
date: 2024-06-05
author: "socraticDev"
image: ../../images/pastebin-proj.png
tags:
  - technology
  - productivity
is_archived: true
---

Several database systems, especially "no-sql" databases, offer the option to assign a `TTL` (Time To Live) to each item inserted. This feature is usually used for the lifecycle of items available from cache systems like `CDN` or `DNS`.

But isn't a database meant to store data... forever?

### The Pastebin Project

My project, [poor man cloud-native pastebin](https://github.com/socraticDevBlog/pastebin), was initially aimed at creating a useful work tool by utilizing AWS's Free Tier offer.

A Pastebin is a place on the web where users can save text snippets and share them via a URL. It's a tool widely used by IRC (Internet Relay Chat) enthusiasts. These early social networks don't allow the transmission of long texts. To send multiple sentences or a piece of code, it's customary to use a Pastebin.

### Boosting Productivity for IT Professionals

Most people working in IT handle text files containing code, scripts, or configurations daily. They often need to transfer these files from one server to another, which can be quite a hassle.

Any server connected to the internet can access a Pastebin to ease this transfer. For instance, if I want to share a long error message found on a server with a colleague, it's much easier to save it in a Pastebin and send the URL.

Taking a screenshot of an error message is a nice gesture, but it can be frustrating for the person who has to work with it!

### Privacy

For security reasons, I encrypt all data sent to servers that aren't mine.

There are, of course, public and free Pastebins available. However, since I don't know what their owners do with the data users send, I believe the only usable Pastebin is the one where you control the source code and the database.

With [poor man cloud-native pastebin](https://github.com/socraticDevBlog/pastebin), you not only have access to the application's source code but also the code used to provision the cloud infrastructure on AWS and the delivery pipelines.

The Dailybuild community freely uses my Pastebin via its website: https://dailybuild.org/pastebin?cid=socraticdevblogreader. For those using this Pastebin, I guarantee the following measures:

- Only people with whom you share the URL of your pastes will have access
- Your pastes will be kept for only 3 days
- Your IP address is hashed before being saved with your paste
- Application logs containing your IP address are purged after 7 days.

### TTL on DynamoDB

There's no reason to keep all pastes in my DynamoDB instance.

Since I neither have the time nor the desire to optimize certain costly queries, I prefer to keep the "Paste" table as small as possible.

By assigning a _Time To Live_ (`TTL`) to each recorded item, I delegate the responsibility of periodically destroying items to DynamoDB. These operations are free, unlike manual operations which incur costs.

As this feature is configured via Terraform infrastructure code, it gives you one more reason to trust my product, right?

```hcl
resource "aws_lambda_function" "apigw_lambda_ddb" {
  function_name = "${var.app_name}-${random_string.random.id}"

  runtime = var.python_runtime

  environment {
    variables = {
      DDB_TABLE     = var.dynamodb_table,
      PASTE_TTL     = 259200, # a paste self-deletes 3 days after insert
      BASE_URL      = var.api_base_url
    }
  }
}
```

### Self-Host Your Own Pastebin

If you don't trust me, you can take my source code and deploy the Pastebin in your own AWS account.

### Conclusion

No matter how you choose to use a Pastebin, I assure you that it will improve your productivity and the quality of your work.

In 2024, we should really stop sharing text through screenshots!

`translated from french by chatgpt with this prompt: "translate this text in english, using simple grammar. feel free to adapt some sentence to make them sound like a native english speaker"`

### Sources

- https://github.com/socraticDevBlog/pastebin
- https://www.wikiwand.com/en/Pastebin
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html
