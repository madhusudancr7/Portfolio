
# Restaurant Data Analysis

This project involves conducting a data analysis on a sample restaurant dataset using MySQL and Python. The goal is to leverage SQL for complex data manipulation and Python for validation and further exploration to extract actionable business insights.

## Key Features

- **Data Cleaning & Transformation**: Performs comprehensive data cleaning and transformation using SQL to ensure data quality and consistency.
- **Advanced SQL Queries**: Applies advanced SQL aggregate and window functions to calculate key business metrics like total revenue, average ratings, top cuisines, and customer trends.
- **Programmatic Validation**: Utilizes Python with the Pandas library to programmatically validate the results of SQL queries and perform exploratory data analysis.

## Tech Stack

- **Database**: MySQL (or any standard SQL database)
- **Programming Language**: Python
- **Libraries**: Pandas

## Files in this Repository

- **`sample_data.csv`**: A CSV file containing sample data about restaurants, including cuisine, ratings, and revenue.
- **`queries.sql`**: A SQL script containing example queries to create a table, insert data, and perform the analysis (aggregate and window functions).
- **`analysis.py`**: A Python script that uses Pandas to load the sample data and perform a similar analysis, which can be used to validate the SQL results or for further exploration.
- **`requirements.txt`**: Python dependencies for this project.

## Setup

1.  **SQL Database:**
    - You will need access to a SQL database (e.g., MySQL, PostgreSQL, SQLite).
    - Create a table using the `CREATE TABLE` statement in `queries.sql`.
    - Load the data from `sample_data.csv` into your table. The method for this varies by database (e.g., `LOAD DATA INFILE` in MySQL, `\copy` in PostgreSQL, or using a GUI tool).

2.  **Python Environment:**
    - **Clone the repository:**
      ```bash
      git clone <your-repo-url>
      cd RestaurantDataAnalysis
      ```
    - **Create and activate a virtual environment:**
      ```bash
      python -m venv venv
      source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
      ```
    - **Install the dependencies:**
      ```bash
      pip install -r requirements.txt
      ```

## Usage

1.  **SQL Analysis:**
    - Execute the queries in `queries.sql` against your database to see the results of the analysis directly.

2.  **Python Analysis:**
    - Run the Python script from your terminal:
      ```bash
      python analysis.py
      ```
    - The script will print the results of its analysis to the console. This can be used to verify the SQL results or to perform analysis steps that are easier in Python.
