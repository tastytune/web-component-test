
export function user_name(first: string,last: string): string {
  return (
    (first || '') +    
    (last ? ` ${last}` : '') 
   
  );
}

export function event_title( title: string): string {
  return (
    (title ? ` ${title}` : '') 
   
  );
}

