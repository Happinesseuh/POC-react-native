function notesToArrayForCards(res) {
    const titles = []

    if (res) {
        for (let i = 0; i < res.length; i++) {
            titles.push([{ title: res[i].title,
                id: res[i].id,
                content: res[i].content,
                date: res[i].modified_date},
                i])
        }
        titles.sort(function(a, b) {
            return new Date(a.date) - new Date(b.date);
        });
        titles.reverse()
    }
    return titles
}

export { notesToArrayForCards }