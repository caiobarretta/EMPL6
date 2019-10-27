import { IotDashboardPage } from './app.po';

describe('iot-dashboard App', function() {
  let page: IotDashboardPage;

  beforeEach(() => {
    page = new IotDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
