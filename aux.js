function getWrappedValue(selected, offset, max) {
  return (selected + offset + max) % max;
}
// Make globally available
window.getWrappedValue = getWrappedValue;