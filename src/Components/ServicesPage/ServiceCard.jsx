import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { CodeOutlined, RiseOutlined, ShareAltOutlined } from '@ant-design/icons';

const cardVariants = {
  offscreen: {
    scale: 0.85,
    opacity: 0
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const iconStyle = { fontSize: '48px', marginBottom: '20px' };
const cardStyles = {
  backgroundColor: '#1f1f1f',
  color: '#fff',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  direction: 'ltr',
  alignItems: 'left',
  justifyContent: 'left',
  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
  transition: 'transform 0.3s ease-in-out',
  marginBottom: '2rem',
};

const buttonStyles = {
  marginTop: '1rem',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '25px',
  fontWeight: 'bold',
  cursor: 'pointer',
  background: 'linear-gradient(45deg, #ffa726, #fb8c00)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
};

const ServiceCard = ({ icon, title, description }) => {
  // Map your icon prop to the respective Ant Design Icon component
  const icons = {
    'CodeOutlined': <CodeOutlined style={iconStyle} />,
    'RiseOutlined': <RiseOutlined style={iconStyle} />,
    'ShareAltOutlined': <ShareAltOutlined style={iconStyle} />,
  };

  return (
    <motion.div
      style={cardStyles}
      whileHover={{ scale: 1.05 }}
      variants={cardVariants}
      initial="offscreen"
      animate="onscreen"
      whileTap={{ scale: 0.95 }}
    >
      {icons[icon] || <CodeOutlined style={iconStyle} />}
      <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>{title}</h3>
      <p style={{ fontSize: '16px', margin: '0', lineHeight: '1.5' }}>{description}</p>
      <motion.button
        style={buttonStyles}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
