import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};
function Field({ type, value, onChange  }) {
  return (
    <div>
      {type === 'text' && (
        <div className="bg-white shadow-md border-2 m-4">
          <div className="mx-2 mb-1">
            <div className="text-black font-semibold">
              <label>Do you have any suggestion to improve our website?</label>
            </div>
            <div>
              <input className="border-2 w-full" type="text" name="firstName" value={value} onChange={onChange} />
            </div>
          </div>
        </div>
      )}
      {type === 'textarea' && (
        <div className="bg-white shadow-md border-2 m-4">
          <div className="mx-2 mb-1">
            <div className="text-black font-semibold">
              <label>Do you have any suggestion to improve our website?</label>
            </div>
            <div>
              <textarea className="border-2 w-full" name="firstName" value={value} onChange={onChange} />
            </div>
          </div>
        </div>
      )}
      {type === 'radio' && (
        <div className="bg-white shadow-md border-2 m-4">
          <div className="mx-2 mb-1">
            <div className="text-black font-semibold">
              <label>Choose an option:</label>
            </div>
            <div>
              <input type="radio" id="option1" name="options" value="option1" onChange={onChange} />
              <label htmlFor="option1">Option 1</label>
            </div>
            <div>
              <input type="radio" id="option2" name="options" value="option2" onChange={onChange} />
              <label htmlFor="option2">Option 2</label>
            </div>
          </div>
        </div>
      )}
      {type === "star" && (
        <div className="bg-white shadow-md border-2  m-4">
          <div className="mx-2 mb-1">
        <Stack spacing={1}>
           <div className="text-black font-semibold">
                <label>rate our website</label>
              </div>
          <Rating name="half-rating" defaultValue={0} precision={0.5} />
        </Stack>
        </div>
          </div>
      )}
        {type === "smiley" && (
        <div className="bg-white shadow-md border-2  m-4">
          <div className="mx-2 mb-1">
          <div className="text-black font-semibold">
                <label>What is the opinion on this page?
                </label>
              </div>
          <StyledRating
      name="highlight-selected-only"
      defaultValue={0}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
        </div>
          </div>
      )}
    </div>
  );
}

export default Field;
