# Project Background
The Colon Cancer Family Registry (CCFR) Cohort is an international consortium of six institutes across Northern America and Australasia, formed as a
resource to support studies on the aetiology, prevention, and clinical management of colorectal cancer. The strength of the CCFR is enhanced by
remaining engaged with the scientific community.

This project involves developing a web-based project management application to process incoming collaboration requests from external researchers. The
application will automate existing manual tasks and workflows providing a streamlined user-friendly system. To centralize all  components of collaboration request management and provide a holistic and entirely integrated system for the requestor and CCFR team, the application is expected to have following features:

1. Researcher registration portal allowing researchers to save and return to incomplete applications.

2. Replace existing paper-based request forms with web-based forms.

3. Automated tracking system.

4. Automated workflows and task assignment.


5. In-built messaging/notification system integrating communications between CCFR team and the researcher.

# Project Aim
The aim of the project is to build a web-based project management application, which allows both researchers/research groups and CCFR staff to track applications. Key features of the solution are the following:

1. Researcher registration portal allowing external researchers to manage their applications

2. Automation of workflow through online web forms and keyword search for overlap detection

3. Automated tracking system which shows the status of applications

4. Overlapping checking algorithm to identify the potential overlap with past research

5. In-built notification system to notify all relevant staff about the progress of applications

6. In-built messaging system integrating communications between CCFR team and the researcher.

7. Upon approval of the application, a list of future tasks that will become automated:

* 1 year out a reminder to submit Annual Progress Reports to PM

* Reminder to submit the final manuscript for PM Review

* Reminder to return genotyping data to IC Manager

# Environment Setup

1. Install node.js
2. Create app.js to use Express to handle HTTP request.
3. Add package using commandline
```sh
npm install

npm install firebse

npm install element-plus

npm run dev
```

4. Folder vite-project for applicant and reviewer portals
```sh
cd vite-project
npm install
npm run dev
```

5. Folder ccfr-admin-portal for admin portal
```sh
cd ccfr-admin-portal
npm install
npm run dev
```

6. Open the firebase project
https://console.firebase.google.com/u/1/project/cp-echidna/overview

ps. The Firebase database console needs access premisssion, if you need access, please email us to get the premisssion

---

