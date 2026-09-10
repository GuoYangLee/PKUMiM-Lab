# Publish and edit the MiM Lab website

This package contains the research group website with its images, styling, fonts, and scripts in separate files. It can be published with GitHub Pages. It does not include a visual editing dashboard.

## September 2026 revision

The site now includes dedicated people.html and news.html pages. The people page contains current members, fourteen member portraits, and an Alumni section. The news page keeps the lab's publication and special-topic updates in one chronological archive. The PhD students are Jing Qiu, Yiwei Duan, Yongkang Zhao, Jiajun Wang, Xi Wang, Houcheng Jiang, and Jingtang Zhou. Jiajun Wang's role has been updated from undergraduate researcher to PhD student. People and news links open these pages within the same website. The principal investigator portrait is smaller on desktop and mobile. Member photos are shown in consistent rectangular cards; the supplied brain logo appears in the header and footer.

If you have already published the static version from an earlier package, upload index.html, people.html, styles.css, app.js, and the complete assets folder to the same publishing location. Commit the updated files. The ZIP itself is not the website: extract it first.

## Publish a new website

1. Sign in at https://github.com/ using the account that will manage the website.
2. Create a new public repository, for example `mimlab-website`. Initialize it with a README so the main branch exists.
3. Extract this ZIP on your computer.
4. In the repository, choose Add file > Upload files. Upload all extracted files and the assets folder. The index.html file must be directly at the repository root. Upload the extracted contents, not the ZIP itself or an enclosing folder.
5. Click Commit changes to save the uploaded files.
6. Open Settings > Pages. Under Build and deployment, choose Deploy from a branch. Select the main branch and /(root), then Save.
7. Wait for the Pages deployment to finish. The published address appears in Settings > Pages.

These instructions create a separate site. Reusing the existing guoyanglee.github.io/mimlab address requires adapting the existing repository's publishing configuration and replacing its current site content after review.

GitHub Pages is available for public repositories on GitHub Free. Your public Pages site can be visited without a ChatGPT account. Local network access to GitHub-hosted sites can vary; check the published link from the networks used by your intended visitors.

## Edit the content online

Sign in to GitHub and open your website repository. Open index.html for homepage content or people.html for the member directory, click the pencil button, and edit the text you want to change. Commit your changes to the publishing branch; GitHub Pages will publish the update after its deployment finishes. If you use a separate branch, merge its pull request into the publishing branch first.

The file and section IDs locate the content:

| Content | File and section |
| --- | --- |
| Main introduction | index.html — id="home" |
| Research descriptions | index.html — id="research" |
| Selected publications | index.html — id="publications" |
| PI profile | index.html and people.html — class="pi-profile" |
| Current members | people.html — id="current-members" |
| Alumni | people.html — id="alumni" |
| Lab news archive | news.html — id="news-archive" |
| Joining information | index.html — id="join" |
| Contact and footer | index.html — id="contact" |
| Lab news and latest updates | class="lab-news" (five `.news-item` entries) |

Keep HTML tags, quotation marks, and matching opening/closing elements intact when editing. To change a paper's destination, update its link URL as well as its title. Some papers have both a title link and a circular arrow link; update both URLs.

For images, upload the replacement to the assets folder and update the image's src, alt, width, and height attributes in the corresponding HTML file as needed. Use simple filenames without spaces. The current portrait is assets/guoyang-li.jpg and the conceptual hero is assets/wave-matter.png.

Member photos use the member-portrait class. Keep the width, height, alt, and loading attributes when adding or replacing a portrait. The lab logo is assets/mim-lab-logo.png.

styles.css controls typography, colors, and page layout. app.js handles mobile navigation and the active section indicator. Routine text updates are made in index.html or people.html. To move a person to Alumni, move the entire member <li> element from the current-members list to the list inside id="alumni" and update their role text.

## If you want a visual dashboard

A content management system such as WordPress provides a signed-in visual editor for pages, images, drafts, and publication. The current static design needs to be adapted to that system. Uploading these files alone does not add a dashboard or editing accounts.

## Files

- index.html: homepage content and structure
- people.html: PI profile, current members, and alumni
- news.html: chronological lab update archive
- styles.css: appearance and responsive layouts
- app.js: mobile menu and section navigation
- assets/: local images, font, icon, and font license

## Sources and licenses

The faculty profile and portrait were checked against https://mech.pku.edu.cn/jzyg/szdw/L/a373c9d3a0cb4d0e8516825bb2719d7d.htm . Initial team roles and opportunities came from the public lab directory at https://guoyanglee.github.io/mimlab/ . The September 10, 2026 member changes and fourteen member photographs were supplied by the lab owner. The new People page has no dependency on that former directory. Publication links appear with each article. The ultrafast OCE work is labeled as a preprint.

The hero artwork is AI-generated conceptual artwork, not experimental data. Manrope is redistributed under its bundled Open Font License in assets/FONT-LICENSE.txt. Content was assembled on September 9, 2026.

## Official instructions

GitHub Pages publishing settings: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Uploading files: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

Editing files in your browser: https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files

WordPress visual editor: https://wordpress.org/documentation/article/wordpress-block-editor/
