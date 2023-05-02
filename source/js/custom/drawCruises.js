const cruiseTemplate = document.querySelector('#cruise');
const cruisesList = document.querySelector('[data-list="offers"]');

const createItem = (cruise) => {
  const cruiseNode = cruiseTemplate.content
      .querySelector('[data-item="cruise"]')
      .cloneNode(true);
  cruiseNode.querySelector(
      '[data-value="title"]'
  ).innerText = `Круиз "${cruise.name}"`;
  cruiseNode.querySelector('[data-value="way"]').innerText = cruise.way;
  cruiseNode.querySelector('[data-value="port"]').innerText = cruise.port;
  cruiseNode.querySelector('[data-value="duration"]').innerText =
    cruise.duration;
  cruiseNode.querySelector('[data-value="price"]').innerText = cruise.price;
  cruisesList.appendChild(cruiseNode);
  cruiseNode
      .querySelector('[data-img="source"]')
      .setAttribute(
          'srcset',
          `./img/cruises/${cruise.img}.webp 1x, ./img/cruises/${cruise.img}@2x.webp 2x`
      );
  cruiseNode
      .querySelector('[data-img="img"]')
      .setAttribute('src', `./img/cruises/${cruise.img}.jpg`);
  cruiseNode
      .querySelector('[data-img="img"]')
      .setAttribute('srcset', `./img/cruises/${cruise.img}@2x.jpg 2x`);
  return cruiseNode;
};

const createList = (list) => {
  if (cruiseTemplate) {
    list.map((cruise) => {
      cruisesList.appendChild(createItem(cruise));
    });
  }
};

export {createList};
