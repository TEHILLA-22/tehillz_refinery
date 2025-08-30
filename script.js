window.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'u') {
        alert('dev tool is protected');
        e.preventDefault();
        return false;
    }
    else if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        alert('Thief man')
        e.preventDefault();
        return false;
    }

    else if (e.key === 'F12') {
        alert('dev tool detected')
        e.preventDefault();
        return false;
    }
})