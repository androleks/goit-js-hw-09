<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form</title>
    <link rel="stylesheet" href="./css/form.css" />
  </head>
  <body>
    <section>
      <a href="./index.html">Go to home</a>
      <h1>Welcome to Form</h1>
      <form class="feedback-form" autocomplete="off">
        <label class="label-form">
          Email
          <input class="input-form" type="email" name="email" autofocus />
        </label>
        <label class="label-form">
          Message
          <textarea class="textarea-form" name="message" rows="8"></textarea>
        </label>
        <button class="batton-form" type="submit">Submit</button>
      </form>
    </section>
    <script src="./js/2-form.js" type="module"></script>
  </body>
</html>