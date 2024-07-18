import flickrFetcher from '../flickr-fetcher.js';

describe('flickrFetcher', () => {
  test('flickrFetcher exists', () => {
    expect(flickrFetcher).toBeDefined();
  });

  describe('photoObjToURL()', () => {
    const testCases = [
      {
        input: {
          id: '25373736106',
          owner: '99117316@N03',
          secret: '146731fcb7',
          server: '1669',
          farm: 2,
          title: 'Dog goes to desperate measure to avoid walking on a leash',
          ispublic: 1,
          isfriend: 0,
          isfamily: 0
        },
        expected: 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg'
      },
      {
        input: {
          id: '24765033584',
          owner: '27294864@N02',
          secret: '3c190c104e',
          server: '1514',
          farm: 2,
          title: 'the other cate',
          ispublic: 1,
          isfriend: 0,
          isfamily: 0
        },
        expected: 'https://farm2.staticflickr.com/1514/24765033584_3c190c104e_b.jpg'
      },
      {
        input: {
          id: '24770505034',
          owner: '97248275@N03',
          secret: '31a9986429',
          server: '1577',
          farm: 2,
          title: 'Some pug picture',
          ispublic: 1,
          isfriend: 0,
          isfamily: 0
        },
        expected: 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg'
      }
    ];
    
    test.each(testCases)('takes a photo object and returns a URL', ({ input, expected }) => {
      const actual = flickrFetcher.photoObjToURL(input);
      expect(actual).toBe(expected);
    });
  });
});