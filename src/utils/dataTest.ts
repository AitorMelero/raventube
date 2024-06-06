export const searchChannelLocal = async (channelName: string) => {
  if (channelName.toLowerCase() === '@raventube') {
    return RAVENTUBE_CHANNEL
  }

  if (channelName.toLowerCase() === '@ravensoft') {
    return RAVENSOFT_CHANNEL
  }

  return null
}

export const searchVideosLocal = async (channelId: string, pageToken?: string) => {
  // Simulacion de busqueda para RavenTube
  if (channelId === '1') {
    if (pageToken === '1') {
      return RAVENTUBE_VIDEOS_1
    } else {
      return RAVENTUBE_VIDEOS_2
    }
  }

  // Simulacion de busqueda para RavenSoft
  if (channelId === '2') {
    if (pageToken === '1') {
      return RAVENSOFT_VIDEOS_1
    } else {
      return RAVENSOFT_VIDEOS_2
    }
  }

  return null
}

const RAVENTUBE_CHANNEL = {
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 12,
  },
  items: [
    {
      id: '1',
      snippet: {
        title: 'RavenTube',
        description:
          'RavenTube Official Channel helps you discover what is new & trending globally. Watch must-see videos, from music to culture to Internet phenomena',
        customUrl: '@raventube',
        publishedAt: '2001-01-01T00:00:00Z',
        thumbnails: {
          high: {
            url: 'https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s800-c-k-c0x00ffffff-no-rj',
            width: 800,
            height: 800,
          },
        },
        country: 'US',
      },
      statistics: {
        viewCount: '3030070387',
        subscriberCount: '40500000',
        hiddenSubscriberCount: false,
        videoCount: '14',
      },
      brandingSettings: {
        channel: {
          title: 'RavenTube',
          description:
            'RavenTube Official Channel helps you discover what is new & trending globally. Watch must-see videos, from music to culture to Internet phenomena',
          keywords: 'youtube official channel',
          trackingAnalyticsAccountId: 'UA-41010131-1',
          country: 'US',
        },
      },
    },
  ],
}

const RAVENSOFT_CHANNEL = {
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 1,
  },
  items: [
    {
      id: '2',
      snippet: {
        title: 'Ravensoft',
        description:
          'Our mission is to empower every person and every organization on the planet to achieve more.\n\nSubscribe to Microsoft official YouTube channel to explore technology role in making the world more sustainable, inclusive, and innovative for all.\n\n',
        customUrl: '@ravensoft',
        publishedAt: '2006-02-13T05:21:44Z',
        thumbnails: {
          high: {
            url: 'https://yt3.ggpht.com/DP2DnSf8hIhdjThIsFyCqktfSgvrLeXfWA0xbPOo8I3n-P2_7c4otmLi6SwbUp1tXcWodn10=s800-c-k-c0x00ffffff-no-rj',
            width: 800,
            height: 800,
          },
        },
        country: 'US',
      },
      statistics: {
        viewCount: '164877012',
        subscriberCount: '1580000',
        hiddenSubscriberCount: false,
        videoCount: '20',
      },
      brandingSettings: {
        channel: {
          title: 'Ravensoft',
          description:
            'Our mission is to empower every person and every organization on the planet to achieve more.\n\nSubscribe to Microsoft official YouTube channel to explore technology role in making the world more sustainable, inclusive, and innovative for all.\n\n',
          keywords:
            'Microsoft Technology Windows Xbox Office Bing "Internet of Things" "Super Bowl" SuperBowl "microsoft teams"',
          unsubscribedTrailer: 'orCxtN-KnYA',
          country: 'US',
        },
      },
    },
  ],
}

const RAVENTUBE_VIDEOS_1 = {
  kind: 'youtube#searchListResponse',
  etag: 'hrmnmtTWAdHdHJok0KlFV18tTL8',
  nextPageToken: '2',
  regionCode: 'ES',
  pageInfo: {
    totalResults: 14,
    resultsPerPage: 12,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'Qx3-7VAhAL4X4py6V6JsGb6DpUo',
      id: {
        kind: 'youtube#video',
        videoId: 'jKXlnYGRQyE',
      },
      snippet: {
        publishedAt: '2024-05-18T18:36:42Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: '\u2060@KristinaMakushenko makes it look too easy #LUNCHbyBillieEilish',
        description: '',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/jKXlnYGRQyE/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/jKXlnYGRQyE/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/jKXlnYGRQyE/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-18T18:36:42Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'eRSV9MM9Gq58ng57nExn9KrI2_w',
      id: {
        kind: 'youtube#video',
        videoId: 'm4ziIcbb4xI',
      },
      snippet: {
        publishedAt: '2021-04-26T14:58:44Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'Because everything',
        description:
          'Crowd surfing, birthday celebrations, wedding receptions, dance parties, hugs, and so much more. This series of videos reminds ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/m4ziIcbb4xI/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/m4ziIcbb4xI/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/m4ziIcbb4xI/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2021-04-26T14:58:44Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'KN8rzjHk8r4XwkygBfozmwb9rzo',
      id: {
        kind: 'youtube#video',
        videoId: 'YbJOTdZBX1g',
      },
      snippet: {
        publishedAt: '2018-12-06T17:58:29Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'YouTube Rewind 2018: Everyone Controls Rewind | #YouTubeRewind',
        description:
          'YouTube Rewind 2018. Celebrating the videos, people, music and moments that defined 2018. #YouTubeRewind It wouldn t be ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/YbJOTdZBX1g/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/YbJOTdZBX1g/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/YbJOTdZBX1g/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2018-12-06T17:58:29Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'NM2A2fKFcEJ-uXJmSBkxKLK5Uog',
      id: {
        kind: 'youtube#video',
        videoId: 'URMwjCkOZwY',
      },
      snippet: {
        publishedAt: '2021-02-14T05:50:45Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: '#LoveNotes: To Dude Perfect',
        description:
          'This Valentine s Day we are celebrating the unique bond between fans and creators with #LoveNotes. Here s Sideserf Cake Studio ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/URMwjCkOZwY/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/URMwjCkOZwY/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/URMwjCkOZwY/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2021-02-14T05:50:45Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'Y8L6zjvVjw3smriRefiezdUyP0k',
      id: {
        kind: 'youtube#video',
        videoId: 'cpDuqXRWPHE',
      },
      snippet: {
        publishedAt: '2021-02-15T04:31:58Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'Celebrating Black Creativity with Guest Artist Marco Cheatham',
        description:
          'Marco Cheatham, a St. Louis-based designer and illustrator, explains the vision behind his illustration showcasing Black creativity ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/cpDuqXRWPHE/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/cpDuqXRWPHE/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/cpDuqXRWPHE/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2021-02-15T04:31:58Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'R60lQ_v7Ifgo-XJsY-KF9xtolBM',
      id: {
        kind: 'youtube#video',
        videoId: 'vY-c7efXiuM',
      },
      snippet: {
        publishedAt: '2015-12-09T18:01:27Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'YouTube Rewind 2015: Behind the Scenes | #YouTubeRewind',
        description:
          'Behind the scenes of YouTube Rewind 2015, the epic celebration of the videos, people, music and moves that made 2015.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/vY-c7efXiuM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/vY-c7efXiuM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/vY-c7efXiuM/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2015-12-09T18:01:27Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'P9ekmY7LAlhPjTpe43O0N58CySg',
      id: {
        kind: 'youtube#video',
        videoId: 'BRcmih7G_LM',
      },
      snippet: {
        publishedAt: '2022-04-25T00:29:54Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'which isn&#39;t one of girl in red&#39;s talents 🤔 #coachella',
        description: 'girlinred shares two facts and a lie at Coachella.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/BRcmih7G_LM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/BRcmih7G_LM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/BRcmih7G_LM/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2022-04-25T00:29:54Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'jqROG31oPpxR0Oftoc6sRsdFxgM',
      id: {
        kind: 'youtube#video',
        videoId: 'lO5dS9cwg4o',
      },
      snippet: {
        publishedAt: '2023-01-02T07:16:49Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'The Year&#39;s Top Videos, 2022 - Like &amp; Describe Podcast #2',
        description:
          'This is Like & Describe, YouTube s official trends podcast! Each episode, you ll join host, MatPat, on a journey to find the little ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/lO5dS9cwg4o/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/lO5dS9cwg4o/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/lO5dS9cwg4o/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2023-01-02T07:16:49Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'KP_2x3vD_bAyQyLZXIsSNpnBZWc',
      id: {
        kind: 'youtube#video',
        videoId: '5z3cI0NnKN0',
      },
      snippet: {
        publishedAt: '2013-05-20T04:01:21Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'The Big Live Comedy Show - YouTube Comedy Week',
        description:
          'Watch as Comedy Week kicks off with an all-star show featuring live performances and video debuts from some of the top names ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/5z3cI0NnKN0/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/5z3cI0NnKN0/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/5z3cI0NnKN0/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2013-05-20T04:01:21Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '7TJ1Kp2ET3kD6YllTkdy0SU4x1s',
      id: {
        kind: 'youtube#video',
        videoId: '6m148dz3uCA',
      },
      snippet: {
        publishedAt: '2022-11-15T14:33:20Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: '#YouTubeBlack Voices 2023 Creator Class',
        description:
          'Creators, innovators, changemakers a new class to celebrate and explore. From tech and money to beauty and wellness, there s ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/6m148dz3uCA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/6m148dz3uCA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/6m148dz3uCA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2022-11-15T14:33:20Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'bceH-fqi-Cd0aFFitso8GJPKAvQ',
      id: {
        kind: 'youtube#video',
        videoId: 'SpSVT43-14U',
      },
      snippet: {
        publishedAt: '2022-04-16T22:49:49Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'chilling at #coachella with Omar Apollo 😍',
        description: 'chill out with @OmarApollo before his set at Coachella.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/SpSVT43-14U/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/SpSVT43-14U/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/SpSVT43-14U/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2022-04-16T22:49:49Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'uV6QZIX3O1Qnfr1QM3VPUXnV2Pk',
      id: {
        kind: 'youtube#video',
        videoId: '_vC2FbaDya8',
      },
      snippet: {
        publishedAt: '2022-12-05T03:40:07Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'i could never pick just one favorite #lynja #streamys',
        description: '',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/_vC2FbaDya8/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/_vC2FbaDya8/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/_vC2FbaDya8/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2022-12-05T03:40:07Z',
      },
    },
  ],
}

const RAVENTUBE_VIDEOS_2 = {
  kind: 'youtube#searchListResponse',
  etag: 'ELQN1-Lv-rfQYjrTNP498k-mvPg',
  prevPageToken: '1',
  regionCode: 'ES',
  pageInfo: {
    totalResults: 14,
    resultsPerPage: 2,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'YEuHONGyj5-xPga0a_RlE4swHQU',
      id: {
        kind: 'youtube#video',
        videoId: '4INskk0HYxU',
      },
      snippet: {
        publishedAt: '2022-04-16T22:53:04Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: 'double Cuco at #coachella 👀',
        description: 'wait...are there *two* of @Cuco hanging at Coachella??',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/4INskk0HYxU/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/4INskk0HYxU/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/4INskk0HYxU/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2022-04-16T22:53:04Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '7TJ1Kp2ET3kD6YllTkdy0SU4x1s',
      id: {
        kind: 'youtube#video',
        videoId: '6m148dz3uCA',
      },
      snippet: {
        publishedAt: '2022-11-15T14:33:20Z',
        channelId: 'UCBR8-60-B28hp2BmDPdntcQ',
        title: '#YouTubeBlack Voices 2023 Creator Class',
        description:
          'Creators, innovators, changemakers–a new class to celebrate and explore. From tech and money to beauty and wellness, there s ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/6m148dz3uCA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/6m148dz3uCA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/6m148dz3uCA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'YouTube',
        liveBroadcastContent: 'none',
        publishTime: '2022-11-15T14:33:20Z',
      },
    },
  ],
}

const RAVENSOFT_VIDEOS_1 = {
  kind: 'youtube#searchListResponse',
  etag: '-V2-Z45y71mXHXl3wt0sWxIfLzk',
  nextPageToken: '2',
  regionCode: 'ES',
  pageInfo: {
    totalResults: 58700,
    resultsPerPage: 12,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'pa7kjz1FG25t_PvcT-o91okreDE',
      id: {
        kind: 'youtube#video',
        videoId: 'orCxtN-KnYA',
      },
      snippet: {
        publishedAt: '2024-06-05T16:30:16Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title:
          'Introducing The Reheat with Keith Lee, Presented by Microsoft. Episode 1 drops here on June 10.🔥',
        description:
          'Keith Lee s viral food reviews result in overnight success for some locally owned restaurants. And also an overwhelming number ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/orCxtN-KnYA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/orCxtN-KnYA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/orCxtN-KnYA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-06-05T16:30:16Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'e1tUhmPcBItLvpSKk5L8igUOPZc',
      id: {
        kind: 'youtube#video',
        videoId: 'tcOwhSE9O7I',
      },
      snippet: {
        publishedAt: '2024-06-05T16:03:16Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Freedom in self-expression | People of Microsoft',
        description:
          'Emerging from a journey of self-discovery and embracing their nonbinary identity, Caroline Scalley, senior business administrator ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/tcOwhSE9O7I/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/tcOwhSE9O7I/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/tcOwhSE9O7I/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-06-05T16:03:16Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'qn-t4djARoXAJXOlqK1xuOz-KmA',
      id: {
        kind: 'youtube#video',
        videoId: 'KRBKTdzVP-o',
      },
      snippet: {
        publishedAt: '2024-06-05T16:03:26Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'From doodles to opened doors | People of Microsoft',
        description:
          'Caroline Scalley invites us into their world through cherished possessions that act as chapters of their journey. A vintage toy ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/KRBKTdzVP-o/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/KRBKTdzVP-o/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/KRBKTdzVP-o/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-06-05T16:03:26Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'uuVkwGPCn4FAvbog8fPwJm0aS10',
      id: {
        kind: 'youtube#video',
        videoId: 'ygMNr4XWyRc',
      },
      snippet: {
        publishedAt: '2024-06-05T16:02:52Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Dismantling the stereotype | People of Microsoft',
        description:
          'Empowered to explore their gender expression fully while working from home, Iain Raleigh, a software engineer at Microsoft, felt ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ygMNr4XWyRc/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ygMNr4XWyRc/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/ygMNr4XWyRc/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-06-05T16:02:52Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'AA61UurNfnCAfg9COOCwoDNF8tc',
      id: {
        kind: 'youtube#video',
        videoId: 'IhQiIZu_pj0',
      },
      snippet: {
        publishedAt: '2024-06-05T16:02:35Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'A tech journey beyond borders | People of Microsoft',
        description:
          'From his Help Desk headset to his Brazilian passport that marks his first visa in tech, Joao Madureira s tech journey is framed by ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/IhQiIZu_pj0/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/IhQiIZu_pj0/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/IhQiIZu_pj0/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-06-05T16:02:35Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'aHlyi0jZyIUBFkUva37cgw5O_3A',
      id: {
        kind: 'youtube#video',
        videoId: 'vcQOnh3OXZo',
      },
      snippet: {
        publishedAt: '2024-06-05T16:03:02Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Rewiring our life’s routes | People of Microsoft',
        description:
          'Our path in life is unpredictable, and there may be pivots and deviations on that road. Iain Raleigh shows us their pivot from art ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/vcQOnh3OXZo/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/vcQOnh3OXZo/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/vcQOnh3OXZo/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-06-05T16:03:02Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'mQa_tiFmIKO2ArvvnAogMY_z6NI',
      id: {
        kind: 'youtube#video',
        videoId: '_PuSfpyHAt4',
      },
      snippet: {
        publishedAt: '2024-06-05T16:02:15Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Utilizing your superpower | People of Microsoft',
        description:
          'Armed with what he calls “super empathy,” Joao Madureira, principal customer reliability engineer at Microsoft, harnesses ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/_PuSfpyHAt4/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/_PuSfpyHAt4/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/_PuSfpyHAt4/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-06-05T16:02:15Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'o7x6yZRbsEDHogXi4w7CycsYKuI',
      id: {
        kind: 'youtube#video',
        videoId: '44pLifmiJtQ',
      },
      snippet: {
        publishedAt: '2024-06-04T16:30:00Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'On June 5 we’re bringing the heat. Stay tuned🔥 #KeithLee #TheReheatWithKeithLee',
        description:
          'Food critic Keith Lee has been instrumental in shining a light on local Black and African American-owned restaurants, with ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/44pLifmiJtQ/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/44pLifmiJtQ/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/44pLifmiJtQ/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-06-04T16:30:00Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'H-DIwCYPLLmtfQTnc7MzYlQlpbc',
      id: {
        kind: 'youtube#video',
        videoId: 'DA2_e-qB9dQ',
      },
      snippet: {
        publishedAt: '2024-06-03T15:30:57Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'BWT Alpine F1 Team&#39;s Everyday AI Companion | Microsoft Copilot',
        description:
          'When team driver Pierre Gasly forgets a birthday, Microsoft Copilot has his back. Learn more: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/DA2_e-qB9dQ/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/DA2_e-qB9dQ/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/DA2_e-qB9dQ/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-06-03T15:30:57Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'HVk-7jL7hh8RFABN8uJ0Og3ZS2c',
      id: {
        kind: 'youtube#video',
        videoId: 'Vg74_vobGSg',
      },
      snippet: {
        publishedAt: '2024-05-30T13:01:47Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title:
          'Through a collaboration with Microsoft, Photonic demonstrates distributed quantum entanglement',
        description:
          'In November 2023, Microsoft and Photonic initiated their collaborative effort to advance quantum networking and computing.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Vg74_vobGSg/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Vg74_vobGSg/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Vg74_vobGSg/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-30T13:01:47Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'nv3UjWQZdHXz0E65ZDFiV8oHWsI',
      id: {
        kind: 'youtube#video',
        videoId: 'fJBPFIFdSSA',
      },
      snippet: {
        publishedAt: '2024-05-24T16:36:18Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Basketball and STEM are a slam dunk | Microsoft and WNBA',
        description:
          'Microsoft and WNBA are teaching kids the science behind the game. How gravity affects ball handling. How geometry helps sink ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/fJBPFIFdSSA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/fJBPFIFdSSA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/fJBPFIFdSSA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-24T16:36:18Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'Eioepmvjg-T1bO1UnxFcIr9I7Gk',
      id: {
        kind: 'youtube#video',
        videoId: 'pqcOAvYveIc',
      },
      snippet: {
        publishedAt: '2024-05-22T14:20:07Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Copilot for Microsoft 365 | Your AI assistant for work',
        description:
          'Copilot for Microsoft 365 helps you uplevel your productivity with data driven insights, visualization tools, real time summaries, ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/pqcOAvYveIc/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/pqcOAvYveIc/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/pqcOAvYveIc/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-22T14:20:07Z',
      },
    },
  ],
}

const RAVENSOFT_VIDEOS_2 = {
  kind: 'youtube#searchListResponse',
  etag: 'PNCiSw8RAImbMEs-hTbR54wVc3Y',
  prevPageToken: '1',
  regionCode: 'ES',
  pageInfo: {
    totalResults: 58700,
    resultsPerPage: 8,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'ypZj1ZgtwTI-mZOQYeG9S3Y7YzY',
      id: {
        kind: 'youtube#video',
        videoId: 'vBCrJaLseQc',
      },
      snippet: {
        publishedAt: '2024-05-21T23:05:52Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: '90-Second Recap: Satya Nadella&#39;s Keynote at Microsoft Build 2024',
        description:
          'Satya Nadella Keynote Sizzle from Microsoft Build 2024 Subscribe to Microsoft on YouTube here: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/vBCrJaLseQc/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/vBCrJaLseQc/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/vBCrJaLseQc/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-21T23:05:52Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'mGvER8KuMlQDM7U73PdOY9Bn3fQ',
      id: {
        kind: 'youtube#video',
        videoId: '8OviTSFqucI',
      },
      snippet: {
        publishedAt: '2024-05-21T22:38:59Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Full Keynote: Satya Nadella at Microsoft Build 2024',
        description:
          'Satya Nadella Full Keynote at Microsoft Build 2024 Subscribe to Microsoft on YouTube here: https://aka.ms/SubscribeToYouTube ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/8OviTSFqucI/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/8OviTSFqucI/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/8OviTSFqucI/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-21T22:38:59Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '2Fvi5aHMuKrGw2Cx_IHwVe-9UMI',
      id: {
        kind: 'youtube#video',
        videoId: 'aZbHd4suAnQ',
      },
      snippet: {
        publishedAt: '2024-05-21T01:58:20Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Full Keynote: Introducing Copilot+ PCs',
        description:
          'Copilot+ PCs are the fastest, most intelligent, and longest lasting Windows PCs ever built. Subscribe to Microsoft on YouTube ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/aZbHd4suAnQ/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/aZbHd4suAnQ/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/aZbHd4suAnQ/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-21T01:58:20Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'LBBCXDVhBPaJnPkgRKe8IoeGq8U',
      id: {
        kind: 'youtube#video',
        videoId: 'huVDWdY2XoQ',
      },
      snippet: {
        publishedAt: '2024-05-17T14:31:27Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Breathing visuals into music | Laufey and Microsoft Copilot',
        description:
          'Every song tells a story, and visuals can help bring them to life. So, for her recent show, musician Laufey discovers inspiration for ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/huVDWdY2XoQ/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/huVDWdY2XoQ/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/huVDWdY2XoQ/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-17T14:31:27Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'Bo77mbl9VMxQ05jFYRFxNxdiK8E',
      id: {
        kind: 'youtube#video',
        videoId: '3wqc6Pkl3w0',
      },
      snippet: {
        publishedAt: '2024-05-14T14:30:00Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'What investors look for in emerging tech | Behind the Tech Podcast',
        description:
          'In this episode, Microsoft s Chief Technology Officer Kevin Scott and Mike discuss Mike s early childhood. Subscribe to Microsoft ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/3wqc6Pkl3w0/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/3wqc6Pkl3w0/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/3wqc6Pkl3w0/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-14T14:30:00Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'NgWv3Q9ohC6Pq0WIHdbXZaMsyl0',
      id: {
        kind: 'youtube#video',
        videoId: 'aYbDLOK14uM',
      },
      snippet: {
        publishedAt: '2024-05-13T17:02:57Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'Anton&#39;s journey: AI-powered coding for everyone #microsoft #github #copilot',
        description:
          'Meet Anton, a software developer hailing from Ukraine. Anton has cerebral palsy and, as a result, he has difficulty typing and ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/aYbDLOK14uM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/aYbDLOK14uM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/aYbDLOK14uM/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-13T17:02:57Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'ZGMI1cl6lqcBGlM0VyaVmQnQqIA',
      id: {
        kind: 'youtube#video',
        videoId: 'WMblt3OKsgY',
      },
      snippet: {
        publishedAt: '2024-05-06T17:31:51Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title:
          'Archer built an app that helps his sister, Della, communicate her own way #microsoft #github #shorts',
        description:
          'When Archer Calder built FreeSpeech, an app to help his non-speaking sister, Della, communicate her own way, he realized the ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/WMblt3OKsgY/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/WMblt3OKsgY/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/WMblt3OKsgY/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-06T17:31:51Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'l7_9OdZ7FY3uTbwTwQKE0Yh1A9Y',
      id: {
        kind: 'youtube#video',
        videoId: '5p7bDN0BFlA',
      },
      snippet: {
        publishedAt: '2024-05-02T17:00:49Z',
        channelId: 'UCFtEEv80fQVKkD4h1PF-Xqw',
        title: 'AI is sometimes the only solution | The Prompt with Trevor Noah',
        description:
          'With the ability to quickly analyze large amounts of data, AI demonstrates that it s not just a solution for solving complex challenges ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/5p7bDN0BFlA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/5p7bDN0BFlA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/5p7bDN0BFlA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Microsoft',
        liveBroadcastContent: 'none',
        publishTime: '2024-05-02T17:00:49Z',
      },
    },
  ],
}
