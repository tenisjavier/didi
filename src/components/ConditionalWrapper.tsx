interface ConditionalWrapperProps {
  condition: any;
  wrapper: any;
  children: any;
}

const ConditionalWrapper = ({ 
  condition, 
  wrapper, 
  children 
}: ConditionalWrapperProps) => {
  return(condition ? wrapper(children) : children);
}

export default ConditionalWrapper;