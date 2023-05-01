export function formatDate (dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate.replace(/^(\w{3})\s(\d{1,2}),\s(\d{4})$/, '$2 $1, $3');
  }
  