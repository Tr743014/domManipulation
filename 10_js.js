// Shows the filter form and hides the add-article form
// One menu is visible at a time
function showFilter() {
    const filter = document.getElementById("filterContent");
    const add = document.getElementById("newContent");

    filter.style.display = "block";
    add.style.display = "none";
}

// Shows the add-article form and hides the filter form
// Flex display for form layout styling
function showAddNew() {
    const filter = document.getElementById("filterContent");
    const add = document.getElementById("newContent");

    add.style.display = "flex";
    filter.style.display = "none";
}

// Filters visible articles based on checkboxes checked.
// Toggle article displays
// Class is enabled depending on type
function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }
        else if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }
        else if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

// Add New Article
// Creates and adds a new article to the page
// 1. Reads user input 
// 2. Validates all required fields
// 3. Determines article class and label
// 4. Builds the structure
// 5. Appends it to the article list
// 6. Clears the form for the next entry
function addNewArticle() {

    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;

    const opinion = document.getElementById("opinionRadio").checked;
    const recipe = document.getElementById("recipeRadio").checked;
    const life = document.getElementById("lifeRadio").checked;

    if (!title || !text || (!opinion && !recipe && !life)) {
        alert("Please fill out all fields.");
        return;
    }

    let typeClass = "";
    let typeLabel = "";

    if (opinion) {
        typeClass = "opinion";
        typeLabel = "Opinion";
    }
    else if (recipe) {
        typeClass = "recipe";
        typeLabel = "Recipe";
    }
    else {
        typeClass = "update";
        typeLabel = "Update";
    }

    // Create article element
    const newArticle = document.createElement("article");
    newArticle.classList.add(typeClass);

    // Create marker
    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = typeLabel;

    // Create title
    const h2 = document.createElement("h2");
    h2.textContent = title;

    // Create paragraph
    const p = document.createElement("p");
    p.textContent = text;

    // Append elements
    newArticle.appendChild(marker);
    newArticle.appendChild(h2);
    newArticle.appendChild(p);

    // Add to page
    document.getElementById("articleList").appendChild(newArticle);

    // Clear form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;

}
