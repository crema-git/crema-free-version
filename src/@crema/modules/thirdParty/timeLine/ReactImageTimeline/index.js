import React from 'react';
import Timeline from 'react-image-timeline';
import './index.css';
import TimelineImageWrapper from './TimelineImageWrapper';

const events = [
  {
    date: new Date(2019, 10, 10),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Madrid, Spain',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/madrid.jpg',
  },
  {
    date: new Date(2019, 10, 27),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'New York, New York',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/ny.jpg',
  },
  {
    date: new Date(2019, 11, 2),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'London, England',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/london.jpg',
  },
  {
    date: new Date(2019, 11, 20),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Cairo, Egypt',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/cairo.jpg',
  },
  {
    date: new Date(2019, 12, 5),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Chicago, Illinois',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/chicago.jpg',
  },
  {
    date: new Date(2019, 12, 10),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Paris, France',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/paris.jpg',
  },
  {
    date: new Date(2019, 12, 25),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Rome, Italy',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/rome.jpg',
  },
  {
    date: new Date(2019, 12, 28),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Seoul, South Korea',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/seoul.jpg',
  },
  {
    date: new Date(2020, 1, 1),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Berlin, Germany',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/berlin.jpg',
  },
  {
    date: new Date(2020, 1, 10),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Tokyo, Japan',
    buttonText: 'Read More',
    imageUrl: '/assets/images/timeline/tokyo.jpg',
  },
];

const ReactImageTimeline = () => {
  return (
    <TimelineImageWrapper>
      <Timeline events={events} />
    </TimelineImageWrapper>
  );
};
export default ReactImageTimeline;
