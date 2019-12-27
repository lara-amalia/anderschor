(() => {
  const gigs = Array.prototype.slice.call(document.querySelectorAll(".js-gig"));
  const now = new Date();
  const nowStr = [
    now.getFullYear(),
    (now.getMonth() + 1).toString().padStart(2, "0"),
    now.getDate()
  ].join(".");
  // Get upcoming gigs
  const upcomingGigs = gigs.filter(function(gig) {
    const date = gig.querySelector("strong").innerHTML;
    const components = date.split(".");
    components.reverse();
    const gigDateStr = components.join(".");
    // Add CSS class to past gigs
    if (gigDateStr < nowStr) {
      gig.classList.add("gig--past");
    }
    return gigDateStr > nowStr;
  });
  // Resort upcoming gigs (next one should be first)
  if (upcomingGigs.length) {
    const parent = upcomingGigs[0].parentNode;
    upcomingGigs.forEach(function(gig) {
      parent.prepend(gig);
    })
  }
})();
