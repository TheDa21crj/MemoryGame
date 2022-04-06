# Memory Game

This is a simple Memory Game build by me. The game has features like showing of cards on click and once the cards mismatch then the cards will again be hidden within 0.5s. This showing and hiding of cards will occur by a smooth transition. If the cards matches then the cards will remain visible.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://prortfolio.pages.dev/)

This web page has been deployed at Cloudflare and below is the link:

[![Memory Game](https://img.shields.io/badge/-Memory%20Game-yellow)](https://memorygame-8av.pages.dev/)

## Tech Stack

**Client:** HTML, CSS, JavaScript.

## About the Project

The game has features like showing of cards on click and once the cards mismatch then the cards will again be hidden within 0.5s. This showing and hiding of cards will occur by a smooth transition. If the cards matches then the cards will remain visible.

- Each time the player mismatch a pair of cards his/her number of 'Failed Attempts' will decrease by 1

- Every time a pair of cards are matched the score will increase by 1

- Once the user reaches the maximum score an alert function is fired showing the player that he has own.

- The initially the color of 'Failed Attempts' and 'Score' is black but as the player Failed Attempts gets non zero its color changes to '#f45725' and similarly for score the color changes to 'gold'.

This project's interface uses DOM Manipulation to create a toggle effect on the hamburger button. This project also contains SVG amination

```bash
    <div class="burger" onclick="hamburger(event)">
        <div id="bur1"></div>
        <div id="bur2"></div>
        <div id="bur3"></div>
    </div>
```

```bash
    #burger3 {
        transform-origin: left;
        transform: rotate(-45deg);
    }
```

```bash
    #bur3 {
        transition: all 0.5s;
    }
```

```bash
    document.getElementById("bur3").id = "burger3";
```

To make the game more interesting we have made the cards to flip when clicked

```bash
    .done {
        transform: rotateY(180deg);
    }

    .card {
        transform-style: preserve-3d;
        transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
```

and a glass interface to enhance player experience.

```bash
    background: linear-gradient( to right bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3));
    backdrop-filter: blur(2rem);
    box-shadow: 10px 10px 100px rgba(161, 161, 161, 0.5);
```

The project also contains a **Copy To Clipboard** to copy the developer's email.

```bash
    var copyText = document.getElementById("emailInp");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
```

## Author

- [@TheDa21crj](https://github.com/TheDa21crj)
