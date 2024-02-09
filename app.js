< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Greeting App</title>
                </head>
                <body>

                    <h1>Welcome to the Greeting App</h1>
                    <p>Please enter your name:</p>

                    <input type="text" id="nameInput">
                        <button onclick="greet()">Greet</button>

                        <p id="greetingMessage"></p>

                        <script>
                            function greet() {
  // Get the input value
  var name = document.getElementById("nameInput").value;

                            // Check if the name is empty
                            if (name === "") {
                                alert("Please enter your name.");
                            return;
  }

                            // Display the greeting message
                            var greeting = "Hello, " + name + "! Welcome to the Greeting App.";
                            document.getElementBy
