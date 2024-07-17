import flickrFetcher from '../flickr-fetcher.js';

test('flickrFetcher exists', () => {
  expect(flickrFetcher).toBeDefined();
});

test('photoObjToURL() takes a photo object and returns a URL', () => {
  const input = {
    id: '25373736106',
    owner: '99117316@N03',
    secret: '146731fcb7',
    server: '1669',
    farm: 2,
    title: 'Dog goes to desperate measure to avoid walking on a leash',
    ispublic: 1,
    isfriend: 0,
    isfamily: 0
  };
  const actual = flickrFetcher.photoObjToURL(input);
  const expected = 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg';

  expect(actual).toBe(expected);
});