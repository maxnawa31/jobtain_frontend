export default function sortJobs(jobs, property) {
  const sortedJobs = [...jobs];
  sortedJobs.sort((a, b) => {
    const textA = a[property] !== null ? a[property].toUpperCase() : ''
    const textB = b[property] !== null ? b[property].toUpperCase() : ''
    return textA < textB ? -1 : textA < textB ? 1 : 0;
  });
  return sortedJobs;
}

export function convertDate(data) {
  let date = data;
  date = date.substring(0, 10).split('-');
  date = `${date[1]}-${date[2]}-${date[0]}`;
  const formattedDate = new Date(date);
  return formattedDate.toDateString();
}

export function sortByDate(jobs) {
  const sortedByDate = [...jobs];
  return sortedByDate.sort((a,b) => {
    let dateA = new Date(a.timestamp);
    let dateB = new Date(b.timestamp);
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  })
}