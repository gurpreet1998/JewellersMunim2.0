import imageFile1 from 'assets/img/illustrations/1.png';
import imageFile2 from 'assets/img/icons/zip.png';
import imageMember1 from 'assets/img/team/avatar.png';
import imageMember2 from 'assets/img/team/empty-thumb.png';

const autoCompleteInitialItem = [
  {
    id: 1,
    url: '/pages/events',
    breadCrumbTexts: ['Pages ', ' Events'],
    catagories: 'recentlyBrowsedItems'
  },
  {
    id: 2,
    url: '/e-commerce/customers',
    breadCrumbTexts: ['E-commerce ', ' Customers'],
    catagories: 'recentlyBrowsedItems'
  },
  {
    id: 3,
    catagories: 'suggestedFilters',
    url: '/e-commerce/customers',
    key: 'customers',
    text: 'All customers list',
    type: 'warning'
  },
  {
    id: 4,
    catagories: 'suggestedFilters',
    url: '/pages/events',
    key: 'events',
    text: 'Latest events in current month',
    type: 'success'
  },
  {
    id: 5,
    catagories: 'suggestedFilters',
    url: '/e-commerce/products/grid',
    key: 'products',
    text: 'Most popular products',
    type: 'info'
  },
  {
    id: 6,
    catagories: 'suggestionFiles',
    url: '#!',
    img: imageFile1,
    file: true,
    title: 'iPhone',
    imgAttrs: {
      class: 'border h-100 w-100 fit-cover rounded-lg'
    },
    time: '<span class="fw-semi-bold">Antony</span><span class="fw-medium text-600 ms-2">27 Sep at 10:30 AM</span>'
  },
  {
    id: 7,
    catagories: 'suggestionFiles',
    url: '#!',
    img: imageFile2,
    file: true,
    title: 'Falcon v1.8.2',
    imgAttrs: {
      class: 'img-fluid'
    },
    time: '<span class="fw-semi-bold">John</span><span class="fw-medium text-600 ms-2">30 Sep at 12:30 PM</span>'
  },
  {
    id: 8,
    url: '/pages/profile',
    catagories: 'suggestionMembers',
    icon: {
      img: imageMember2,
      size: 'l',
      status: 'status-online'
    },
    title: 'Anna Karinina',
    text: 'Technext Limited'
  },
  {
    id: 9,
    url: '/pages/profile',
    catagories: 'suggestionMembers',
    icon: {
      img: imageMember1,
      size: 'l'
    },
    title: 'Antony Hopkins',
    text: 'Brain Trust'
  },
  {
    id: 10,
    url: '/pages/profile',
    catagories: 'suggestionMembers',
    icon: {
      img: imageMember1,
      size: 'l'
    },
    title: 'Emma Watson',
    text: 'Google'
  }
];

export default autoCompleteInitialItem;
