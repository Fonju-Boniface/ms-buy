export const Testimonials = {
    name: 'testimonials',
    type: 'document',
    title: 'Testimonial',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'profession',
        type: 'string',
        title: 'Profession',
      },
      {
        name: 'email',
        type: 'email',
        title: 'Email',
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        description: 'Rating between 1 and 5',
        
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message',
      },
      {
        name: 'country',
        type: 'string',
        title: 'Country',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Testimonial Image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
    ],
  };