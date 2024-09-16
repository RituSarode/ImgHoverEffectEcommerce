import React, { useState } from "react";
import { Box, Image, VStack, Text } from '@chakra-ui/react';

function App() {
  const [properties] = useState([
    {
      imageUrl: 'https://images.meesho.com/images/products/191428644/rgbz5_512.webp',
      imageAlt: 'Image 1',
      content: 'This is the back side content of Image 1',
    },
    {
      imageUrl: 'https://images.bestsellerclothing.in/data/vero-moda/25-jan-2023/123051902_g2.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto&dpr=1.2',
      imageAlt: 'Image 2',
      content: 'This is the back side content of Image 2',
    },
    {
      imageUrl: 'https://images.meesho.com/images/products/191428644/rgbz5_512.webp',
      imageAlt: 'Image 3',
      content: 'This is the back side content of Image 3',
    },
    {
      imageUrl: 'https://images.meesho.com/images/products/191428644/rgbz5_512.webp',
      imageAlt: 'Image 4',
      content: 'This is the back side content of Image 4',
    }
  ]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box display="flex" p={4} width="100vw" height="100vh" margin="0">
      {/* Left sidebar with images */}
      <Box width="100px" mr={4} display="flex" flexDirection="column" alignItems="flex-start">
        <VStack spacing={4} align="flex-start">
          {properties.map((property, index) => (
            <Box
              key={index}
              style={{
                width: '100px',
                height: '100px',
                marginBottom: '16px',
                cursor: 'pointer',
                border: hoveredIndex === index ? '2px solid blue' : 'none',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(index)}
            >
              <Image  
                src={property.imageUrl}
                alt={property.imageAlt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Right section to show the hovered image */}
      <Box
        flex="1"
        height="100%"
        display="flex"
        alignItems="flex-start" // Use flex-start for left alignment
        justifyContent="flex-start" // Use flex-start for left alignment
        p={4}
        bg="gray.50"
      >
        {hoveredIndex !== null ? (
          <Image
            src={properties[hoveredIndex].imageUrl}
            alt={properties[hoveredIndex].imageAlt}
            style={{
              display:'flex',
              width: '30%', // Adjusted width for better fit
              height: 'auto',
              maxHeight: '60%', // Adjusted maxHeight to fit better
              //objectFit: 'contain',
              alignItems: "left",
              justifyContent:"left",
             
            }}
          />
        ) : (
          <Text>Hover over an image to see it here</Text>
        )}
      </Box>
    </Box>
  );
}

export default App;
