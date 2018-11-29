export default {
  introContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    color: 'white'
  },
  cardContainer: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 0.9,
    fontSize: '22px',
    overflow: 'hidden'
  },
  cardHeader: {
    flex: '0.1 1 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    textAlign: 'center',
    fontSize: '30px',
    padding: '4px',
    maxHeight: '10vh'
  },
  cardImageContainer: {
    flex: '0.7 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    maxHeight: '70vh'
  },
  cardImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    height: 'auto',
    width: 'auto'
  },
  cardContent: {
    flex: '0.2 1 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '4px',
    maxHeight: '20vh',
    userSelect: 'none'
  },
  buttons: {
    minHeight: '60px',
    minHeight: '10%',
    minHeight: '80px'
  },
  slideButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    border: '2px solid',
    borderRadius: '100%',
    padding: '5px',
    userSelect: 'none',
    cursor: 'pointer',
    marginBottom: '20px'
  },
  arrowBase: {
    height: '2px',
    width: '28px',
    borderTop: '2px solid',
    position: 'absolute',
    left: '13px',
    top: '25px'
  },
  arrowHead: {
    width: '15px',
    height: '15px',
    border: '2px solid',
    borderLeft: 'none',
    borderTop: 'none',
    transform: 'rotate(-45deg)',
    position: 'absolute',
    right: '14px',
    top: '18px'
  },
  checkMark: {
    content: '',
    display: 'block',
    width: '10px',
    height: '24px',
    border: '2px solid white',
    borderTop: 'none',
    borderLeft: 'none',
    transform: 'rotate(45deg)',
    marginBottom: '5px',
    position: 'absolute',
    top: '10px',
    right: '20px'
  },
}