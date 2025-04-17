<script>
  const floatingLove = document.getElementById("floatingLove");
  function spawnLoveIcon() {
    const icon = document.createElement('div');
    icon.classList.add('love-icon');
    icon.style.left = Math.random() * 100 + 'vw';
    icon.style.top = Math.random() * 100 + 'vh';
    icon.style.fontSize = Math.random() * 20 + 15 + 'px';
    icon.innerText = '💕';
    floatingLove.appendChild(icon);
    setTimeout(() => icon.remove(), 10000);
  }

  setInterval(spawnLoveIcon, 1200); // slower, fewer floating emojis
</script>
