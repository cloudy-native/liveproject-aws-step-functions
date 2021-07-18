# Stephen Harrison

Fair warning. Some of the comments are nit-picky.

## 1.1

Typo: ...single points of failure...

Instructions for finding the application `manning-calandra-lp-s1p1` could be more explicit. The application shows up in the Private Applications tab because it creates IAM resources.

I think we should make it clear that `public process(...) { }` is a method of `Order` by showing more of the class.

In the diagram, not `BoohHotel` and `BoohMuseam`.

Not sure what START/End BookHotel specification box means.

```
exports.handler = async (evt) => {
   // hotel's booking process

   return var;
}
```

is not a valid JavaScript function. `var` is a reserved word.

Typo: "that will broke" -> "that will break"

## 2.1

Maybe "without the console" rather than "without these facilities"

Typo: "If a function have to write" -> If a function has to write"

The role is technically a "service role."

Typo: "so function’s that will assume this role" -> "so functions that will assume this role"

Your explanation of roles and handlers is really good.

I'm not sure how a "sub-method" is not just a method.

## 2 Project Conclusions

Typo: "Even if it is hide" -> "Although it is hidden"

# The Simplest Step Functions

Typo: "resources that needs" -> "resources that need"

"Author with code snippets" is not one of the options for creating a workflow

![](images/Screen%20Shot%202021-07-08%20at%2020.36.29.png)

It might be cheating, but you get some nice completion of Lambda if you use the visual editor.

![](images/Screen%20Shot%202021-07-08%20at%2020.40.11.png)

Typo: "this state machine replace the process" -> "this state machine replaces the process"

Do not include comments in the JSON payload. Just let people copy

```
{
   "purchase": {
         "buyer_id": "mariano"
   },
   "hotel": {
      "start_date": "2020-03-13",
      "end_date": "2020-03-15"
   },
   "museum": {
      "name": "tate gallery",
      "when": "2020-03-14"
   }
}
```

So steps 3 and 4 are a bit confusing. It's not clear why we tested the workflow with the above payload. Maybe just to see an error? Not sure.

I'm not sure what "Use Parameters to the state configuration" means. It might be better just to say something "execute the workflow again, this time with the following payload."

```
{
   "start_date": "2020-03-13",
   "end_date": "2020-03-15",
   "buyer_id": "mariano",
   "near": "tate gallery"
}
```

# Publish SNS Message

# 1.1

A bit easy.

# 2.1

Typo: "notification reach that topic" -> "notification reaches that topic"

Clearer?: "close the gap" -> "fill in some details"

Clarification: "Create an IAM role" -> "Create a Lambda service role"

Clarification: Make the Lambda runtime Node.js 14.x

Clarification: "no matter the filename" -> " the filename does not matter"

s3.upload()... it's possible in theory, but s3.putObject() seem like a better fit here.

The payload is not valid JSON. The correct version is

```
{
    "Records": [
        {
            "Sns": {
                "Message": "{\"purchase\":{\"buyer_id\":\"mariano3\"},\"hotel\":{\"start_date\":\"2020-03-13\",\"end_date\":\"2020-03-15\",\"reservation_id\":\"XULOQ\",\"name\":\"L1\"},\"museum\":{\"when\":\"2020-03-14\",\"reservation_id\":\"YOZYC\",\"name\":\"tate gallery\"}}",
            }
        }
    ]
}
```

Typo: `InvoingingBuilderFunction` -> `InvoicingBuilderFunction`