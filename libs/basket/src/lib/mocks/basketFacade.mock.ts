import { of } from 'rxjs';

export const basketFacadeStub = {
  removeProductFromBasket: () => {},
  allBasket$: of([
    {
      id: 1,
      name: 'Super dog',
      imagePath: 'https://i.picsum.photos/id/884/300/300.jpg?hmac=jAyoGx30ARoANVmERuqCldqNt8s_w-5k6sg7DURNzvI',
      quantity: 1,
      prize: 1.20,
    }, {
      id: 2,
      name: 'Terminator',
      imagePath: 'https://i.picsum.photos/id/668/300/300.jpg?hmac=HLROXo5TChrai69D04nx0w8LRY2wNmqKlHB7cNkKpFw',
      quantity: 1,
      prize: 1,
    }
  ])
};
