function hamburgerMenu() {
  let hamburgerLinks = document.getElementById("hamburger-links")

  if (hamburgerLinks.style.display === "block") {
    hamburgerLinks.style.display = "none"
  } else {
    hamburgerLinks.style.display = "block"
  }
}

function gameplayFeatures() {
  let gameplayFeatures = document.getElementById("gameplay-link")
  let worldFeatures = document.getElementById("world-link")
  let avatarFeatures = document.getElementById("avatar-link")
  let nftFeatures = document.getElementById("nft-link")
  let gameplayContent = document.getElementById("gameplay-section")
  let worldContent = document.getElementById("world-section")
  let avatarContent = document.getElementById("avatar-section")
  let nftContent = document.getElementById("nft-section")

  if (!gameplayFeatures.classList.contains("active-link")) {
    gameplayFeatures.classList.add("active-link")
    worldFeatures.classList.remove("active-link")
    avatarFeatures.classList.remove("active-link")
    nftFeatures.classList.remove("active-link")
    gameplayContent.style.display = "block"
    worldContent.style.display = "none"
    avatarContent.style.display = "none"
    nftContent.style.display = "none"
  }
}

function worldFeatures() {
  let gameplayFeatures = document.getElementById("gameplay-link")
  let worldFeatures = document.getElementById("world-link")
  let avatarFeatures = document.getElementById("avatar-link")
  let nftFeatures = document.getElementById("nft-link")
  let gameplayContent = document.getElementById("gameplay-section")
  let worldContent = document.getElementById("world-section")
  let avatarContent = document.getElementById("avatar-section")
  let nftContent = document.getElementById("nft-section")

  if (!worldFeatures.classList.contains("active-link")) {
    worldFeatures.classList.add("active-link")
    gameplayFeatures.classList.remove("active-link")
    avatarFeatures.classList.remove("active-link")
    nftFeatures.classList.remove("active-link")
    gameplayContent.style.display = "none"
    worldContent.style.display = "block"
    avatarContent.style.display = "none"
    nftContent.style.display = "none"
  }
}

function avatarFeatures() {
  let gameplayFeatures = document.getElementById("gameplay-link")
  let worldFeatures = document.getElementById("world-link")
  let avatarFeatures = document.getElementById("avatar-link")
  let nftFeatures = document.getElementById("nft-link")
  let gameplayContent = document.getElementById("gameplay-section")
  let worldContent = document.getElementById("world-section")
  let avatarContent = document.getElementById("avatar-section")
  let nftContent = document.getElementById("nft-section")

  if (!avatarFeatures.classList.contains("active-link")) {
    worldFeatures.classList.remove("active-link")
    gameplayFeatures.classList.remove("active-link")
    avatarFeatures.classList.add("active-link")
    nftFeatures.classList.remove("active-link")
    gameplayContent.style.display = "none"
    worldContent.style.display = "none"
    avatarContent.style.display = "block"
    nftContent.style.display = "none"
  }
}

function nftFeatures() {
  let gameplayFeatures = document.getElementById("gameplay-link")
  let worldFeatures = document.getElementById("world-link")
  let avatarFeatures = document.getElementById("avatar-link")
  let nftFeatures = document.getElementById("nft-link")
  let gameplayContent = document.getElementById("gameplay-section")
  let worldContent = document.getElementById("world-section")
  let avatarContent = document.getElementById("avatar-section")
  let nftContent = document.getElementById("nft-section")

  if (!nftFeatures.classList.contains("active-link")) {
    worldFeatures.classList.remove("active-link")
    gameplayFeatures.classList.remove("active-link")
    avatarFeatures.classList.remove("active-link")
    nftFeatures.classList.add("active-link")
    gameplayContent.style.display = "none"
    worldContent.style.display = "none"
    avatarContent.style.display = "none"
    nftContent.style.display = "block"
  }
}

function federalLink() {
  let federalLink = document.getElementById("federal-link")
  let urbanPrimeLink = document.getElementById("urban-prime-link")
  let urbanLink = document.getElementById("urban-link")
  let outskirtLink = document.getElementById("outskirt-link")
  let islandLink = document.getElementById("island-link")
  let landTitle = document.getElementById("land-title")
  let landDesc = document.getElementById("land-desc")
  let landImage = document.getElementById("land-image")

  if (!federalLink.classList.contains("active-link")) {
    federalLink.classList.add("active-link")
    urbanLink.classList.remove("active-link")
    urbanPrimeLink.classList.remove("active-link")
    outskirtLink.classList.remove("active-link")
    islandLink.classList.remove("active-link")
    landTitle.innerText = "Federal Territory"
    landDesc.innerText =
      "The foundation of land in Ember Sword revolves around square 1x1 plots that are, roughly, the size of one screen. Regular plots are the base form of land in the game, your chance to own a piece of Thanabus. Regular plots come with the Sir/Lady title and have traits that are unveiled as the game world unfolds, which can include campsites, NPC houses, resource deposits, monster spawns and more!"
    landImage.src =
      "https://embersword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuilding-regular-plot.a56c2cba.png&w=1920&q=75"
  }
}

function urbanPrimeLink() {
  let federalLink = document.getElementById("federal-link")
  let urbanPrimeLink = document.getElementById("urban-prime-link")
  let urbanLink = document.getElementById("urban-link")
  let outskirtLink = document.getElementById("outskirt-link")
  let islandLink = document.getElementById("island-link")
  let landTitle = document.getElementById("land-title")
  let landDesc = document.getElementById("land-desc")
  let landImage = document.getElementById("land-image")

  if (!urbanPrimeLink.classList.contains("active-link")) {
    federalLink.classList.remove("active-link")
    urbanLink.classList.remove("active-link")
    urbanPrimeLink.classList.add("active-link")
    outskirtLink.classList.remove("active-link")
    islandLink.classList.remove("active-link")
    landTitle.innerText = "Urban Prime"
    landDesc.innerText =
      "Settlements are 1x1 sized pieces of land on which you can place small-sized buildings. They can be great resupply stations, forward guild outposts and more. Settlements come with the Baron/Baroness title and examples of what you can build include small player housing, small guild houses and small player stores."
    landImage.src =
      "https://embersword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuilding-settlement.80e29307.png&w=1920&q=75"
  }
}

function urbanLink() {
  let federalLink = document.getElementById("federal-link")
  let urbanPrimeLink = document.getElementById("urban-prime-link")
  let urbanLink = document.getElementById("urban-link")
  let outskirtLink = document.getElementById("outskirt-link")
  let islandLink = document.getElementById("island-link")
  let landTitle = document.getElementById("land-title")
  let landDesc = document.getElementById("land-desc")
  let landImage = document.getElementById("land-image")

  if (!urbanLink.classList.contains("active-link")) {
    federalLink.classList.remove("active-link")
    urbanLink.classList.add("active-link")
    urbanPrimeLink.classList.remove("active-link")
    outskirtLink.classList.remove("active-link")
    islandLink.classList.remove("active-link")
    landTitle.innerText = "Urban"
    landDesc.innerText =
      "Towns are larger than settlements and offer more to the wayward adventurer. They are the home to buildings aimed towards more specific tasks, such as crafting, specific gear acquisition and resource refinement. A town nets you the title of Earl/Countess and, alongside all the settlement buildings, you can construct refinement stations, crafting buildings, medium guild houses, and an exchange, a structure which gives you access to the global item trading network."
    landImage.src =
      "https://embersword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuilding-town.e0a35b4e.png&w=1920&q=75"
  }
}

function outskirtLink() {
  let federalLink = document.getElementById("federal-link")
  let urbanPrimeLink = document.getElementById("urban-prime-link")
  let urbanLink = document.getElementById("urban-link")
  let outskirtLink = document.getElementById("outskirt-link")
  let islandLink = document.getElementById("island-link")
  let landTitle = document.getElementById("land-title")
  let landDesc = document.getElementById("land-desc")
  let landImage = document.getElementById("land-image")

  if (!outskirtLink.classList.contains("active-link")) {
    federalLink.classList.remove("active-link")
    urbanLink.classList.remove("active-link")
    urbanPrimeLink.classList.remove("active-link")
    outskirtLink.classList.add("active-link")
    islandLink.classList.remove("active-link")
    landTitle.innerText = "Outskirt"
    landDesc.innerText =
      "Cities are bustling centers of commercial activity and are brimming with riches for those willing to put in the work. The largest structures and guilds are found in these urban locations, bringing along boundless opportunities. City owners are granted the title of Duke or Duchess and alongside all buildings from settlements and towns, cities allow you to construct large guild houses, portals, caravan trading posts, and more!"
    landImage.src =
      "https://embersword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuilding-city.ab7f7890.png&w=1920&q=75"
  }
}

function islandLink() {
  let federalLink = document.getElementById("federal-link")
  let urbanPrimeLink = document.getElementById("urban-prime-link")
  let urbanLink = document.getElementById("urban-link")
  let outskirtLink = document.getElementById("outskirt-link")
  let islandLink = document.getElementById("island-link")
  let landTitle = document.getElementById("land-title")
  let landDesc = document.getElementById("land-desc")
  let landImage = document.getElementById("land-image")

  if (!federalLink.classList.contains("active-link")) {
    federalLink.classList.remove("active-link")
    urbanLink.classList.remove("active-link")
    urbanPrimeLink.classList.remove("active-link")
    outskirtLink.classList.remove("active-link")
    islandLink.classList.add("active-link")
    landTitle.innerText = "Island"
    landDesc.innerText =
      "The foundation of land in Ember Sword revolves around square 1x1 plots that are, roughly, the size of one screen. Regular plots are the base form of land in the game, your chance to own a piece of Thanabus. Regular plots come with the Sir/Lady title and have traits that are unveiled as the game world unfolds, which can include campsites, NPC houses, resource deposits, monster spawns and more!"
    landImage.src =
      "https://embersword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuilding-regular-plot.a56c2cba.png&w=1920&q=75"
  }
}

const cursor = document.querySelector(".cursor")
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px"
  cursor.style.top = e.pageY + "px"
})
