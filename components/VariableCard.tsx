import React from 'react';

interface VariableCardProps {
  title: string;
  value: string;
}

const VariableCard = ({ title, value }: VariableCardProps) => {
  return (
    <div className='card card-sm variable-card'>
      <p className='card-title'>{title}</p>
      <p className='variable-card-data'>{value}</p>
    </div>
  );
};

export default VariableCard;
