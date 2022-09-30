[[database]] [[postgresql]] [[sql]]

# TimescaleDB
- Built on top of [[PostgreSQL]]
	- An extension for [[PostgreSQL]]
	- Anything you can do with [[PostgreSQL]], you can do with Timescale
- Improves [[PostgreSQL]] query performance and increases storage efficiency
- Used for time-series data applications
- Uses continuous aggregates to ensure materialized views don't produce performance degradation
- Scales across multiple nodes
	- Criticism of [[postgresql|Postgres]] is that it is hard to scale-out when your [[database]] instance is maxed out
	- TimescaleDB Multi-node links multiple [[PostgreSQL]] nodes together to scale out ingest
		- Distributed hypertables spreads data across nodes
		- You access data as you normally you
- Uses partitioning and compression to decrease storage costs (especially good for time)
	- Utilizes [[PostgreSQL]] storage features (TOAST)
	- Transitions historical data from row-store to column-storey

## Hypertable
- Seamless partitioning of 
	- Splits tables into smaller chunks
- Abstraction of a single, virtual table across all your data