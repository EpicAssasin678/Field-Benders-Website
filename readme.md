<!DOCTYPE html>
<!-- 
    Name: Zachery Uporsky
    Date: 9/3/22
    Project description and idea for Web Programming/Design final project.
 -->
 <!--
Site title - Specify the working title for the site.
Development roles - Identify each team member and individual responsibilities for the project.
Need - Describe the need the web site will satisfy. What is the purpose of the site? Is there an interest group whose needs are not satisfied? Is there a target niche you are trying to fill?
Rationale or focus - Explain the content and goals of the site, such as billboard, customer support, catalog/e-commerce, informational, or resource. 
Main elements outline - Describe the main features of the site.
Content - Estimate the number of individual web pages.
Target audience - Describe the typical audience for the site.
Design considerations - List the design goals for the site.
Limiting factors - Identify the technical or audience factors that could limit the design goals of the site.
Development schedule, milestones, and deliverables - Using your class schedule as a basis, build a development schedule that indicates milestones and deliverables for each team member.
 -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Description</title>
    <style>
        th {
            color: white;
            background-color: black;
        }
        table {
            background-color: rgba(0, 0, 0, 0.15);
        }
        td, th {
            padding-left: 4px;
            padding-right: 10px;
            border-bottom: 1px solid black;
        }
        td {
            background-color: rgba(185, 176, 176, 0.37)
        }
    </style>
</head>
<body>
    <h1>Field Benders: Archive Description</h1>
    <p>Author: Zachery Uporsky</p>
    <p>My website will be the platform in which I publish my finished and ongoing lite novel Field Benders. Accompanying this webiste I would like to have an Archive
        section to accomidate supplimentary information within the series. The Archive section should be the far deeper section of this website; it will accomidate a series of 
        short puzzles hidden throughout each information piece, interactive graphics, and tentatively an embedded terminal. 
    </p>
    <h1>Working Title</h1>
    <p>The site officially will be called Field Benders</p>
    <h1>Development Roles</h1>
    <p>I, Zachery Uporsky will be responsible for all the roles of development regarding this site. Design, style, and art direction will be directly managed by myself. I will also be 
        directly responsible for all back end and front end development.
    </p>
    <h1>Need and Focus</h1>
    <p>Primarily, the focus of this website will be to deliver a more interactive form of a bi-weekly light novel that I am working on called Field Benders. This will include, other forms
    of interaction with the content such as the archive portion of the site, which will contain more interactive ways of interacting with the content. Overall, the rationale of this site 
    could be summed up as primarily entertainment focused and nothing more. This site also satisfies the need for those to read my content, and to immerse themselves far better than a 
    traditional e-book could ever hope to do.
    </p>
    <h1>Main elements</h1>
    <p>The website can be essentially broken down into three sections: the main portion, the archive, and the chapter reader.</p>
    <ul>
        <li>Main section of the site:
            <ul>
                <li>Homepage - Hook page to capture the attention of someone on the website, serves as an introduction to the content. Will include a recent news section on the right end
                    of the page that will have site updates or novel related updates.
                </li>
                <li>About me page - Contain information abot the author (me), some other links including my socials and contact. </li>
            </ul>
        </li>
        <li>The archive:
            <ul>
                <li>Terminal - Page containing a terminal emulator which will mimic as if the user is interacting with the site and uncovering details about the site as time continues.</li>
                <li>Gallery - Page containing pictures from the series and other artwork relating to the series that may not be in the chapters, will be formatted mostly in cards, and 
                    can inspect the description of each card.
                </li>
                <li>Archive - Page containing all the supplementary content one may look up. Includes a searchbar.</li>
            </ul>
        </li>
        <li>Chapter reader:
            <ul>
                <li>Homepage - Page containing a table of contents to navigate the chapters to quickly read them.</li>
                <li>Chapter[N] - Page containing a chapter of the light novel with a GUI of sorts to control how the person reads the text. Will be many in the same format, but different
                    content of course. Includes pictures and sound elements as well as some animations possibly.
                </li>
            </ul>
        </li>
    </ul>
    <p>Estimated number of pages: 7 + N (N=number of chapters published at the time).</p>
    <h1>Design considerations</h1>
    <p>Design goals:</p>
    <ol>
        <li>Make a consistently themed set of pages.</li>
        <li>Have a trackable page viewer which watches for where in the text the user would be and reactively displays information accordingly.</li>
        <li>Have an archive section where users can interactively discover supplementary information through a terminal emulator.</li>
    </ol>
    <h1>Limiting factors</h1>
    <p>Main limiting factors for the site would be the database application I use for the archive section at least. MonogDB currently is what I would want to use as a back-end, but their is 
        some real memory and bandwidth limitations which may prove hard to not exhaust while testing the archive section. Realistically, the only other limiting factors may be the libraries 
        I work with, but nothing should get in the way of the most basic implementation of this idea. Audience isn't a worry, partiularly because those who are on this site are there to read 
        the content. 
    </p>
    <h1>Development schedule:</h1>
    <table style="border:1px black solid;">
        <tr>
            <th>Milestone</th>
            <th>Week</th>
            <th>Members</th>
            <th>Delivereables</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Homepage</td>
            <td>1</td>
            <td>Zachery Uporsky</td>
            <td>index.html, styles.css, site directory skeletonized</td>
            <td>Create basic site skeleton, including a sticky navbar, and a completed stylesheet for the site.</td>
        </tr>
        <tr>
            <td>Database</td>
            <td>2</td>
            <td>Zachery Uporsky</td>
            <td>connect.js, App.js (start scripts)</td>
            <td>Created database connection with MongoDB and has connection scripts made for the web application on the chapter reader side.</td>
        </tr>
        <tr>
            <td>Chapters Section</td>
            <td>3-4</td>
            <td>Zachery Uporsky</td>
            <td>chapters.html, chapter1.html, chapter2.html, reader.js, readerGUI.js</td>
            <td>Creates chapters section, including homepage with proper stylazation and typefacing, a consistent UI, UI control scripts, and a working beggining to chapter 1. </td>
        </tr>
        <tr>
            <td>Archive Section</td>
            <td>4-6</td>
            <td>Zachery Uporsky</td>
            <td>index.html, terminal.html, gallery.html, archive.html, stylesheets (styles.scss)</td>
            <td>Complete page creation of archive, with working integrated terminal, and gallery. </td>
        </tr>
        <tr>
            <td>Sign-in Options</td>
            <td>6-7</td>
            <td>Zachery Uporsky</td>
            <td>signin.php</td>
            <td>Complete sign in scripts and user persistence across site, integrate with Archive section.</td>
        </tr>
    </table>
</body>
</html>