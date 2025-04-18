import { backendUrl } from "../shared";

export const ImagePreviewCard = ({ imageUrl, fileName }) => {
  //console.log(imageUrl, fileName);

  const cardStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: "200px", // Adjust width to fit better in the grid
    margin: '10px', // Adds space between the cards
    maxHeight: '100px'
  };

  const imageStyle = {
    maxWidth: '100%', // Make the image take up the full width of the card
    height: 'auto',
    borderRadius: '4px',
    maxHeight: '100px'
  };

  const fileNameStyle = {
    marginTop: '8px',
    fontSize: '14px',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={fileName} style={imageStyle} />
      <p style={fileNameStyle}>{fileName}</p>
    </div>
  );
};

export const ImagePreviewGrid = ({ images }) => {
  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Allows the images to wrap to the next line
    justifyContent: 'flex-start', // Aligns items to the start of the container
    gap: '16px', // Adds spacing between the grid items
  };

  return (
    <div style={gridStyle}>
      {images.map((image, index) => (
        <ImagePreviewCard key={index} imageUrl={image.file} fileName={image.name} />
      ))}
    </div>
  );
};
