<template>
  <div class="footer-container">
    <div>
      <p>Email</p>
      <a href="mailto:wwstwd@gmail.com" class="textColour"
        >wwstwd@gmail.com<span class="material-symbols-outlined">
          open_in_new
        </span></a
      >
    </div>
    <div>
      <p>Instagram</p>
      <a
        href="http://instagram.com/westwood.portfolio"
        target="_blank"
        rel="noopener noreferrer"
        class="textColour"
        >@westwood.portfolio<span class="material-symbols-outlined">
          open_in_new
        </span></a
      >
    </div>
    <div>
      <p>LinkedIn</p>
      <a
        href="https://www.linkedin.com/in/will-westwood/"
        target="_blank"
        rel="noopener noreferrer"
        class="textColour"
        >William Westwood<span class="material-symbols-outlined">
          open_in_new
        </span></a
      >
    </div>
    <div>
      <p>GitHub</p>
      <a
        href="https://www.github.com/iwouldntbother/"
        target="_blank"
        rel="noopener noreferrer"
        class="textColour"
        >iwouldntbother<span class="material-symbols-outlined">
          open_in_new
        </span></a
      >
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* height: 8vw; */
  padding: 20px 0;
  /* background-color: violet; */
  width: 100vw;
  box-sizing: border-box;
}

.footer-container p {
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0 0 6px 0;
}

.footer-container a span {
  font-size: 1rem;
}

@media screen and (max-width: 600px) {
  .footer-container {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    height: min-content;
  }

  .footer-container > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer-container p {
    font-size: 0.8rem;
    margin-bottom: 0;
  }

  .footer-container a {
    font-size: 0.5rem;
    margin-bottom: 10px;
  }
  .footer-container a span {
    font-size: 0.5rem;
  }
}
</style>
