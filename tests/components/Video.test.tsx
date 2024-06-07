import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoType } from '@/types/types'
import { MD5 } from 'crypto-js'
import { BrowserRouter } from 'react-router-dom'
import { Video } from '@/components/Video'

describe('Video component render and display data testing', () => {
  const videoTest: VideoType = {
    id: '2ff52616-5c59-42e1-88ee-16050013f5c7',
    name: 'Video Test',
    imageUrl: 'imageTest',
    videoDate: '2024-06-06',
    visits: 1000,
    hashmd5: MD5('Video Test'),
    prevPageToken: undefined,
    nextPageToken: undefined,
  }

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Video videoData={videoTest} />
      </BrowserRouter>,
    )
  })

  test('should render', () => {
    expect(true).toBeTruthy()
  })

  test('should show video title', () => {
    expect(screen.getByText(videoTest.name)).toBeTruthy()
    expect(true).toBeTruthy()
  })

  test('should show video hashmd5', () => {
    expect(screen.getByText(videoTest.hashmd5.toString())).toBeTruthy()
    expect(true).toBeTruthy()
  })

  test('should show video visits', () => {
    expect(screen.getByText(videoTest.visits + ' views')).toBeTruthy()
    expect(true).toBeTruthy()
  })

  test('should show video date', () => {
    expect(screen.getByText('Published at ' + videoTest.videoDate)).toBeTruthy()
    expect(true).toBeTruthy()
  })
})
