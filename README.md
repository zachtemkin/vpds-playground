# Visa Nova Component Showcase

A comprehensive showcase application that displays all available Visa Nova React components in an organized grid layout.

## Features

- **Complete Component Coverage**: Displays all 50+ Visa Nova React components
- **Responsive Grid Layout**: Automatically adjusts to different screen sizes
- **Component Documentation**: Each component includes a title, description, and live example
- **Interactive Components**: Many components are fully functional with sample data
- **Modern UI**: Clean, professional design with hover effects and smooth transitions

## Components Included

The showcase includes all major Visa Nova components such as:

- **Form Components**: Button, Input, Checkbox, Radio, Select, Switch, Textarea
- **Display Components**: Badge, Chip, Avatar, Typography, Icon, VisaLogo
- **Layout Components**: Surface, Panel, ContentCard, Divider
- **Navigation Components**: Tabs, Accordion, Breadcrumbs, Pagination
- **Feedback Components**: Message, Banner, Tooltip, Progress indicators
- **Data Components**: Table, Listbox, Combobox
- **And many more...**

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL

## Technology Stack

- **React 19** - Modern React with latest features
- **Visa Nova React** - Official Visa design system components
- **Styled Components** - CSS-in-JS styling solution
- **Vite** - Fast build tool and development server

## Project Structure

```
src/
├── components/
│   ├── ComponentContainer.jsx    # Individual component wrapper
│   └── ComponentList.jsx         # Main grid layout with all components
├── App.jsx                       # Main application component
├── globalStyles.js               # Global CSS styles
└── main.jsx                      # Application entry point
```

## Customization

The component showcase is easily customizable:

- Add new components by updating the `componentConfigs` array in `ComponentList.jsx`
- Modify component props and descriptions
- Adjust the grid layout by modifying the CSS Grid properties
- Customize the styling using the styled-components

## Contributing

Feel free to enhance the showcase by:

- Adding more component examples
- Improving component descriptions
- Adding interactive features
- Enhancing the visual design

## License

This project is licensed under the same terms as the Visa Nova library.
