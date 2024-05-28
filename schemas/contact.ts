export const ContactSchema = {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
     
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'profession',
      title: 'Profession',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
  ],
};