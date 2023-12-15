# StockWise- Grocery Store Inventory Management solution
ESP Project-Tech Rebooters  
# Team Members  
1. Aishwarya Manoharan
2. Puja Kumari
3. Vidhi Agarwal
4. Upasana Kumar

Demo and presentation link:

PPT & Demo Video link - https://drive.google.com/file/d/18Vy6cxUvPf6V9pyOJHniqXYwNrsdptWb/view?usp=sharing


Application Demo Video - https://drive.google.com/file/d/1LgvDY7ml1UT9YNDxhidYGDebDmaSpmom/view?usp=sharing

# Problem statement
In the dynamic and competitive world of retail, particularly in the grocery sector, store owners and managers face the daunting task of juggling multiple challenges. The primary issue lies in managing a diverse range of inventory, especially perishable items, while simultaneously striving to offer exceptional customer service. This task is complicated further by the need to maintain optimal stock levels to avoid both overstocking, which can lead to waste, particularly of perishable goods, and understocking, which can result in missed sales opportunities and customer dissatisfaction. The GSC project emerges as an innovative and efficient solution in this context. It is meticulously crafted to cater to the specific needs of grocery store officials, who regularly confront the complexities of inventory management. The intricacies of handling perishable goods, ensuring adequate stock availability, and providing seamless shopping experiences are central to the challenges that this project aims to address. Our solution recognizes these challenges not just as problems but as opportunities to significantly enhance the operational efficiency of grocery stores. The aim is to develop a comprehensive system that is not only efficient but also user-friendly, making it easily adoptable by store personnel. This system intends to revolutionize the typical workflow within grocery stores.

# Solution
1. Live Stock Monitoring: Keep real-time track of product inventory levels to ensure product availability on time.
2. Analytics Dashboard: A centralized dashboard to track the historical sales data and the current inventory levels. 
3. Demand Forecasting: Analyze past customer buying patterns to fine-tune stock levels according to customer preferences. This helps manage overstocking and understocking issues, resulting in maximizing profits.
4. Expiration Date Tracking: Monitoring the expiry dates of perishable goods such as dairy, meat, and produce is crucial. This involves using older inventory before newer stock to ensure freshness and reduce the risk of spoilage.
5. Seasonal Demand Planning: Plan for seasonal surges in demand and put discounts on seasonal items to manage excessive stock.
6. Inventory Valuation: Calculate the value of the inventory by analyzing the cost of products to its retail value for determining the turnover and other financial data.
7. Vendor Management: Seamless onboarding of vendors and automated process to place orders whenever required.
8. Multi-Store Management: For multiple store locations, inventory is distributed efficiently among them to meet demand while minimizing operational costs.
9. Online and Offline Integration: Integrate online and offline inventory systems for accurate stock monitoring, preventing overselling to customers.

How to setup in local?

1.KeyCloak

Install Keycloak using Docker.

Create Realm, Client and perforrm cofigurations as per below screenshot.

Backend Client Keycloak Settings(Private)

<img width="1338" alt="image" src="https://github.com/pujaKumari15/StockWise/assets/144417727/568a486b-b401-4869-9ade-2f68a1ae120d">

Update value of Valid Redirect URIs - *

Frontend Client Keycloak Settings(Public)

<img width="1338" alt="image" src="https://github.com/pujaKumari15/StockWise/assets/144417727/a41f376c-aca6-44cd-acf2-bfb0ad00015e">

Update value of Valid Redirect URIs - http://localhost:3000/*

Set below values in Application.Properties

keycloak.resource= Name of Backend Client
keycloak.credentials.secret=  Update this value from the client credential

2.React Frontend

Do npm install to download dependencies.

Go to client folder and run npm start to start React Frontend.

It will open http://localhost:3000 to view in browser. Any code changes in UI will reload in the browser automatically.


3.Springboot Application

Run gradle build to build the application

Use the command  gradle bootRun to start the application.


4.Database 

Install MySQL using Docker.

Update application.properties with the below values

spring.datasource.url=jdbc:mysql://{Host:Port}/{DBName}

spring.datasource.username

spring.datasource.password

Demo Screenshots
<img width="883" alt="image" src="https://github.com/pujaKumari15/StockWise/assets/144417727/b33055ac-4b2a-4ac7-9e1a-f99d1e439f64">

<img width="883" alt="image" src="https://github.com/pujaKumari15/StockWise/assets/144417727/38b925a5-08a5-4561-b15d-4ff5bbcc0776">

<img width="950" alt="image" src="https://github.com/pujaKumari15/StockWise/assets/144417727/d04a1ced-295a-4531-a7d7-80937c3eb410">

SSO using KeyCloak

<img width="998" alt="image" src="https://github.com/pujaKumari15/StockWise/assets/144417727/dfd58953-0173-4c8f-9605-e79d14a03e16">


User registered in keycloak

<img width="1071" alt="image" src="https://github.com/pujaKumari15/StockWise/assets/144417727/3e060405-f5b6-425c-8c8e-1b42cbff6401">






