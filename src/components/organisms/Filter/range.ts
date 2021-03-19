export const handleDeposit = (value: number) => {
  switch (value) {
    case 0:
      return 0;
    case 5.55:
      return 100;
    case 11.1:
      return 200;
    case 16.65:
      return 300;
    case 22.2:
      return 500;
    case 27.75:
      return 1000;
    case 33.3:
      return 3000;
    case 38.85:
      return 5000;
    case 44.4:
      return 7000;
    case 49.95:
      return 10000;
    case 55.5:
      return 15000;
    case 61.05:
      return 20000;
    case 66.6:
      return 25000;
    case 72.15:
      return 30000;
    case 77.7:
      return 35000;
    case 83.25:
      return 40000;
    case 88.8:
      return 50000;
    case 94.35:
      return 60000;
    case 99.9:
      return 100000;
    default:
      return 0;
  }
};

export const handleRent = (value: number) => {
  switch (value) {
    case 0:
      return 0;
    case 5.55:
      return 10;
    case 11.1:
      return 15;
    case 16.65:
      return 20;
    case 22.2:
      return 25;
    case 27.75:
      return 30;
    case 33.3:
      return 35;
    case 38.85:
      return 40;
    case 44.4:
      return 50;
    case 49.95:
      return 60;
    case 55.5:
      return 70;
    case 61.05:
      return 100;
    case 66.6:
      return 150;
    case 72.15:
      return 200;
    case 77.7:
      return 250;
    case 83.25:
      return 300;
    case 88.8:
      return 350;
    case 94.35:
      return 400;
    case 99.9:
      return 500;
    default:
      return 0;
  }
};
