//! "(children: React.Node) => React.Node" usage on wrapper was throwing some weird error when we call <ConditionalWrapper/> on the Accordion component, the error said: 'ConditionalWrapper' cannot be used as a JSX component / Its return type ReactNode is not a valid JSX element / Type 'undefined' is not assignable to type 'Element | null'
//? Any ideas on how to not use ANY on wrapper?

interface ConditionalWrapperProps {
  condition?: boolean;
  wrapper: any; //! Not ideal
  children: React.ReactNode;
}

const ConditionalWrapper = ({ 
  condition, 
  wrapper, 
  children
}: ConditionalWrapperProps) => {
  return(condition ? wrapper(children) : children);
}

export default ConditionalWrapper;